import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const logo = await readFile(path.join(process.cwd(), "public/logo-full.png"));
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#FFFFFF", padding: 70, flexDirection: "column", justifyContent: "space-between", borderBottom: "18px solid #7C3AED" }}>
      {/* ImageResponse renders this image into the PNG, not a browser DOM. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`data:image/png;base64,${logo.toString("base64")}`} alt="Entek Digital" width={420} height={140} style={{ objectFit: "contain", objectPosition: "left" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 58, fontWeight: 700, color: "#000000" }}>Web Tasarım & Dijital Pazarlama</div>
        <div style={{ fontSize: 32, color: "#6B7280" }}>Karaman · entekdigital.com</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
