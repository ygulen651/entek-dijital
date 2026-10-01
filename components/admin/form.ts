// Firestore dokümanı <-> form değerleri dönüşümleri.
// Liste alanları formda satır satır düz metin olarak düzenlenir, kaydederken diziye çevrilir.

import type { FieldDef } from "./schemas";

export type FormValues = Record<string, string | boolean>;

export function slugify(text: string) {
  const map: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" };
  return text
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşü]/g, (ch) => map[ch])
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

const splitLines = (value: string) =>
  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

export function toForm(fields: FieldDef[], data: Record<string, unknown>): FormValues {
  const values: FormValues = {};
  for (const field of fields) {
    const raw = data[field.name];
    switch (field.type) {
      case "boolean":
        values[field.name] = raw !== false;
        break;
      case "list":
      case "images":
        values[field.name] = Array.isArray(raw) ? raw.join("\n") : "";
        break;
      case "pairs":
        values[field.name] = Array.isArray(raw)
          ? (raw as { title: string; desc: string }[]).map((p) => `${p.title} | ${p.desc}`).join("\n")
          : "";
        break;
      default:
        values[field.name] = raw === undefined || raw === null ? "" : String(raw);
    }
  }
  return values;
}

export function fromForm(fields: FieldDef[], values: FormValues): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const field of fields) {
    const raw = values[field.name];
    switch (field.type) {
      case "boolean":
        data[field.name] = raw !== false;
        break;
      case "number": {
        const num = Number(raw);
        data[field.name] = raw === "" || Number.isNaN(num) ? 999 : num;
        break;
      }
      case "list":
      case "images":
        data[field.name] = splitLines(String(raw ?? ""));
        break;
      case "pairs":
        data[field.name] = splitLines(String(raw ?? "")).map((line) => {
          const [title, ...rest] = line.split("|");
          return { title: title.trim(), desc: rest.join("|").trim() };
        });
        break;
      case "slug":
        data[field.name] = slugify(String(raw ?? ""));
        break;
      default:
        data[field.name] = String(raw ?? "").trim();
    }
  }
  return data;
}

export function validate(fields: FieldDef[], values: FormValues): string | null {
  for (const field of fields) {
    if (field.required && !String(values[field.name] ?? "").trim()) {
      return `"${field.label}" alanı zorunludur.`;
    }
  }
  return null;
}
