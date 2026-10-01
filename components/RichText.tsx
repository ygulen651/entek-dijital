import React from "react";

// Admin panelinde yazılan düz metni basit kurallarla biçimlendirir:
// "**Başlık**" ile başlayan satır ara başlık, "-" ile başlayan satır madde olur.
const RichText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <div className={`prose prose-xl prose-slate max-w-none font-sans text-black/70 leading-relaxed space-y-8 ${className}`}>
      {text.split(/\n\s*\n/).map((block, blockIndex) => {
        const lines = block.split("\n").map(line => line.trim()).filter(Boolean);
        if (lines.every(line => line.startsWith("-"))) {
          return <ul key={blockIndex} className="ml-6 list-disc space-y-2 font-bold text-black">{lines.map((line, index) => <li key={index}>{line.replace(/^-\s*/, "").replace(/\*\*/g, "")}</li>)}</ul>;
        }
        return <React.Fragment key={blockIndex}>{lines.map((raw, i) => {
        const paragraph = raw.trim();
        if (!paragraph) return null;
        if (paragraph.startsWith("**")) {
          return (
            <h2 key={i} className="text-3xl font-heading font-bold text-black pt-4">
              {paragraph.replace(/\*\*/g, "")}
            </h2>
          );
        }
        if (paragraph.startsWith("-")) {
          return (
            <ul key={i} className="ml-6 list-disc font-bold text-black"><li>
              {paragraph.replace("-", "").replace(/\*\*/g, "").trim()}
            </li></ul>
          );
        }
        return <p key={i}>{paragraph.replace(/\*\*/g, "")}</p>;
        })}</React.Fragment>;
      })}
    </div>
  );
};

export default RichText;
