import assert from "node:assert/strict";

const origin = process.env.SEO_TEST_ORIGIN || "http://localhost:3100";
const canonicalOrigin = "https://www.entekdigital.com";
const get = (path, bot = true) => fetch(origin + path, { redirect: "manual", headers: bot ? { "User-Agent": "Twitterbot" } : {} });
const tag = (html, selector) => html.match(selector)?.[1];

const robots = await get("/robots.txt");
assert.equal(robots.status, 200);
const rules = await robots.text();
assert.match(rules, /Allow: \/(?:\r?\n|$)/);
assert.doesNotMatch(rules, /Disallow: \/(?:\r?\n|$)/);
assert.match(rules, /Disallow: \/admin/);
assert.match(rules, /Sitemap: https:\/\/www\.entekdigital\.com\/sitemap\.xml/);

const sitemap = await get("/sitemap.xml");
assert.equal(sitemap.status, 200);
const xml = await sitemap.text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.ok(urls.length >= 6);
assert.equal(new Set(urls).size, urls.length);
const titles = new Set();
const descriptions = new Set();
const internalLinks = new Set();
for (const url of urls) {
  assert.ok(url.startsWith(canonicalOrigin + "/"));
  const path = new URL(url).pathname;
  assert.ok(!path.startsWith("/admin"));
  const response = await get(path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    assert.notEqual(match[1], "#", `Placeholder link: ${path}`);
    if (match[1].startsWith("/") && !match[1].startsWith("//")) internalLinks.add(match[1].split("#")[0]);
  }
  if (path === "/") assert.match(html, /Entek Digital; Karaman’da web tasarım/);
  const title = tag(html, /<title>(.*?)<\/title>/s);
  const description = tag(html, /<meta name="description" content="([^"]*)"/);
  assert.ok(title && description, `Missing title/description: ${path}`);
  assert.ok(!titles.has(title), `Duplicate title: ${path}`);
  assert.ok(!descriptions.has(description), `Duplicate description: ${path}`);
  titles.add(title); descriptions.add(description);
  assert.equal(new URL(tag(html, /<link rel="canonical" href="([^"]*)"/)).href, url, path);
  assert.equal(new URL(tag(html, /<meta property="og:url" content="([^"]*)"/)).href, url, path);
  assert.match(html, /<meta property="og:title" content="[^"]+"/);
  assert.match(html, /<meta property="og:description" content="[^"]+"/);
  assert.match(html, /<meta property="og:image" content="[^"]+"/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `Expected one H1: ${path}`);
  assert.equal([...html.matchAll(/<main(?:\s|>)/g)].length, 1, `Expected one main: ${path}`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  assert.ok(schemas.length, `Missing JSON-LD: ${path}`);
  if (path !== "/") assert.ok(schemas.some(schema => schema["@type"] === "BreadcrumbList"), `Missing breadcrumb: ${path}`);
  if (path.startsWith("/hizmetler/")) {
    assert.ok(schemas.some(schema => schema["@type"] === "Service"));
    assert.ok(schemas.some(schema => schema["@type"] === "BreadcrumbList"));
    assert.match(html, /Sık sorulan sorular/);
  }
  if (path.startsWith("/blog/")) assert.ok(schemas.some(schema => schema["@type"] === "Article"));
  const graph = schemas.find(schema => schema["@graph"])?.["@graph"];
  const organization = graph?.find(schema => schema["@id"].endsWith("#organization"));
  assert.ok(organization);
  for (const property of ["address", "geo", "openingHoursSpecification", "aggregateRating", "telephone"]) assert.ok(!(property in organization));
  console.log(`PASS ${path}: title, description, canonical, OG, H1, main, JSON-LD`);
}

for (const path of internalLinks) {
  const response = await get(path);
  assert.equal(response.status, 200, `Broken internal link: ${path}`);
  await response.text();
}

for (const path of ["/seo-test-missing-page", "/hizmetler/seo-test-missing", "/blog/seo-test-missing", "/projects/seo-test-missing"]) {
  for (const bot of [true, false]) {
    const response = await get(path, bot);
    assert.equal(response.status, 404, `404 status: ${path}, bot=${bot}`);
    assert.match(await response.text(), /<meta name="robots" content="[^"]*noindex/);
  }
  console.log(`PASS ${path}: HTTP 404 and noindex (browser and bot)`);
}
const admin = await get("/admin");
assert.equal(admin.status, 200);
assert.match(await admin.text(), /<meta name="robots" content="noindex, nofollow"/);
const slash = await get("/services/");
assert.equal(slash.status, 308);
assert.equal(slash.headers.get("location"), "/services");
const image = await get("/og");
assert.equal(image.status, 200);
assert.match(image.headers.get("content-type"), /image\/png/);
const png = Buffer.from(await image.arrayBuffer());
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
const llms = await get("/llms.txt");
assert.equal(llms.status, 200);
const llmsText = await llms.text();
for (const url of urls.filter(url => url.includes("/hizmetler/"))) assert.ok(llmsText.includes(url));
const verification = await get("/googlec6f3609bc3b74ee4.html");
assert.equal(verification.status, 200);
console.log(`PASS robots, sitemap (${urls.length} URLs), ${internalLinks.size} internal link destinations, admin noindex, trailing-slash 308, OG PNG 1200×630, llms.txt, verification file`);
