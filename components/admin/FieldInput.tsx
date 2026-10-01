"use client";

import React, { useRef, useState } from "react";
import { FirebaseError } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ImagePlus, Loader2, Wand2, X } from "lucide-react";
import { getFirebaseApp } from "@/lib/firebase";
import { slugify, type FormValues } from "./form";
import type { FieldDef } from "./schemas";

export const inputClass =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-primary-neon focus:ring-2 focus:ring-primary-neon/20";

async function uploadImage(file: File) {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const storageRef = ref(getStorage(getFirebaseApp()), `uploads/${Date.now()}-${safeName}`);
  await uploadBytes(storageRef, file, { contentType: file.type });
  return getDownloadURL(storageRef);
}

function UploadButton({ onUploaded, multiple = false }: { onUploaded: (urls: string[]) => void; multiple?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    setError("");
    try {
      const urls = await Promise.all(Array.from(files).map(uploadImage));
      onUploaded(urls);
    } catch (err) {
      console.error(err);
      const code = err instanceof FirebaseError ? ` (${err.code})` : "";
      setError(`Yükleme başarısız${code}. Alternatif olarak görsel bağlantısını yapıştırabilirsiniz.`);
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-1">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <button
        type="button"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
        className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-xs font-bold text-black/70 hover:border-primary-neon hover:text-primary-neon disabled:opacity-50"
      >
        {busy ? <Loader2 size={14} className="animate-spin" /> : <ImagePlus size={14} />}
        {busy ? "Yükleniyor..." : multiple ? "Görsel(ler) yükle" : "Görsel yükle"}
      </button>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

function Thumb({ src, onRemove }: { src: string; onRemove?: () => void }) {
  return (
    <div className="relative h-20 w-28 overflow-hidden rounded-lg border border-black/10 bg-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" />
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="absolute right-1 top-1 rounded-full bg-black/70 p-1 text-white hover:bg-red-600"
          aria-label="Görseli kaldır"
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
}

export default function FieldInput({
  field,
  values,
  onChange,
}: {
  field: FieldDef;
  values: FormValues;
  onChange: (name: string, value: string | boolean) => void;
}) {
  const value = values[field.name];
  const text = typeof value === "string" ? value : "";

  let control: React.ReactNode;
  switch (field.type) {
    case "boolean":
      control = (
        <label className="inline-flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={value !== false}
            onChange={(e) => onChange(field.name, e.target.checked)}
            className="h-5 w-5 accent-primary-neon"
          />
          <span className="text-sm text-black/70">{field.label}</span>
        </label>
      );
      break;
    case "textarea":
      control = <textarea rows={4} value={text} onChange={(e) => onChange(field.name, e.target.value)} className={inputClass} />;
      break;
    case "richtext":
      control = (
        <textarea rows={14} value={text} onChange={(e) => onChange(field.name, e.target.value)} className={`${inputClass} font-mono leading-relaxed`} />
      );
      break;
    case "list":
    case "pairs":
      control = <textarea rows={5} value={text} onChange={(e) => onChange(field.name, e.target.value)} className={inputClass} />;
      break;
    case "number":
      control = <input type="number" value={text} onChange={(e) => onChange(field.name, e.target.value)} className={`${inputClass} max-w-40`} />;
      break;
    case "slug":
      control = (
        <div className="flex gap-2">
          <input value={text} onChange={(e) => onChange(field.name, e.target.value)} className={inputClass} />
          {field.source && (
            <button
              type="button"
              title="Başlıktan üret"
              onClick={() => onChange(field.name, slugify(String(values[field.source!] ?? "")))}
              className="shrink-0 rounded-xl border border-black/10 px-3 text-black/60 hover:border-primary-neon hover:text-primary-neon"
            >
              <Wand2 size={16} />
            </button>
          )}
        </div>
      );
      break;
    case "image":
      control = (
        <div className="space-y-3">
          {text && <Thumb src={text} onRemove={() => onChange(field.name, "")} />}
          <div className="flex flex-wrap items-start gap-3">
            <UploadButton onUploaded={([url]) => onChange(field.name, url)} />
            <input
              value={text}
              placeholder="veya görsel bağlantısı yapıştırın (https://... ya da /works/01.png)"
              onChange={(e) => onChange(field.name, e.target.value)}
              className={`${inputClass} flex-1 min-w-60`}
            />
          </div>
        </div>
      );
      break;
    case "images": {
      const urls = text.split("\n").map((u) => u.trim()).filter(Boolean);
      const setUrls = (next: string[]) => onChange(field.name, next.join("\n"));
      control = (
        <div className="space-y-3">
          {urls.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {urls.map((url, i) => (
                <Thumb key={`${url}-${i}`} src={url} onRemove={() => setUrls(urls.filter((_, idx) => idx !== i))} />
              ))}
            </div>
          )}
          <UploadButton multiple onUploaded={(added) => setUrls([...urls, ...added])} />
          <textarea
            rows={3}
            value={text}
            placeholder="Her satıra bir görsel bağlantısı"
            onChange={(e) => onChange(field.name, e.target.value)}
            className={`${inputClass} text-xs`}
          />
        </div>
      );
      break;
    }
    default:
      control = (
        <input
          type={field.type === "url" ? "url" : "text"}
          value={text}
          onChange={(e) => onChange(field.name, e.target.value)}
          className={inputClass}
        />
      );
  }

  if (field.type === "boolean") return <div>{control}</div>;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-black">
        {field.label}
        {field.required && <span className="ml-1 text-primary-neon">*</span>}
      </label>
      {control}
      {field.help && <p className="text-xs text-black/50">{field.help}</p>}
    </div>
  );
}
