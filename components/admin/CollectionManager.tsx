"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite";
import { ArrowLeft, ExternalLink, Eye, EyeOff, Loader2, Pencil, Plus, Save, Search, Trash2 } from "lucide-react";
import { revalidateContent } from "@/app/actions";
import { getDb } from "@/lib/firebase";
import FieldInput, { inputClass } from "./FieldInput";
import { fromForm, toForm, validate, type FormValues } from "./form";
import type { CollectionDef } from "./schemas";

type Row = Record<string, unknown> & { id: string };

export default function CollectionManager({ def }: { def: CollectionDef }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<{ id: string | null; values: FormValues } | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const snap = await getDocs(collection(getDb(), def.collection));
      const items = snap.docs.map((d) => ({ ...d.data(), id: d.id }) as Row);
      items.sort((a, b) => Number(a.order ?? 999) - Number(b.order ?? 999));
      setRows(items);
    } catch (err) {
      console.error(err);
      setError("Kayıtlar yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }, [def.collection]);

  useEffect(() => {
    // Sayfa her koleksiyon için key ile yeniden oluşturulduğundan sadece ilk yüklemede çalışır.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return rows;
    return rows.filter((row) => String(row[def.titleField] ?? "").toLocaleLowerCase("tr").includes(q));
  }, [rows, query, def.titleField]);

  const startNew = () => {
    const values = toForm(def.fields, {});
    if ("order" in values) values.order = String(rows.length + 1);
    setEditing({ id: null, values });
  };

  const save = async () => {
    if (!editing) return;
    const problem = validate(def.fields, editing.values);
    if (problem) return setError(problem);

    const data = fromForm(def.fields, editing.values);
    if (typeof data.slug === "string") {
      const clash = rows.find((r) => r.slug === data.slug && r.id !== editing.id);
      if (clash) return setError("Bu URL (slug) başka bir kayıtta kullanılıyor.");
    }

    setSaving(true);
    setError("");
    try {
      const col = collection(getDb(), def.collection);
      if (editing.id) await setDoc(doc(col, editing.id), data);
      else await addDoc(col, data);
      await revalidateContent();
      setEditing(null);
      await load();
    } catch (err) {
      console.error(err);
      setError("Kaydedilemedi. Yönetici yetkiniz olduğundan emin olun.");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (row: Row) => {
    if (!confirm(`"${String(row[def.titleField] ?? "")}" silinsin mi? Bu işlem geri alınamaz.`)) return;
    try {
      await deleteDoc(doc(getDb(), def.collection, row.id));
      await revalidateContent();
      setEditing(null);
      await load();
    } catch (err) {
      console.error(err);
      setError("Silinemedi.");
    }
  };

  const togglePublished = async (row: Row) => {
    try {
      await updateDoc(doc(getDb(), def.collection, row.id), { published: row.published === false });
      await revalidateContent();
      await load();
    } catch (err) {
      console.error(err);
      setError("Güncellenemedi.");
    }
  };

  if (editing) {
    const existing = editing.id ? rows.find((r) => r.id === editing.id) : undefined;
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              setEditing(null);
              setError("");
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-black"
          >
            <ArrowLeft size={16} /> {def.title}
          </button>
          <div className="flex gap-3">
            {existing && (
              <button
                onClick={() => remove(existing)}
                className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50"
              >
                <Trash2 size={16} /> Sil
              </button>
            )}
            <button
              onClick={save}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-neon disabled:opacity-60"
            >
              {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} Kaydet
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-heading font-bold text-black">
          {editing.id ? `${def.singular} düzenle` : `Yeni ${def.singular.toLocaleLowerCase("tr")}`}
        </h1>

        {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        <div className="space-y-6 rounded-2xl border border-black/5 bg-white p-6 md:p-8">
          {def.fields.map((field) => (
            <FieldInput
              key={field.name}
              field={field}
              values={editing.values}
              onChange={(name, value) =>
                setEditing((prev) => (prev ? { ...prev, values: { ...prev.values, [name]: value } } : prev))
              }
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-black">{def.title}</h1>
          <p className="text-sm text-black/50">{rows.length} kayıt</p>
        </div>
        <button
          onClick={startNew}
          className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-neon"
        >
          <Plus size={16} /> Yeni {def.singular.toLocaleLowerCase("tr")}
        </button>
      </div>

      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ara..." className={`${inputClass} pl-10`} />
      </div>

      {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-black/50">
          <Loader2 size={16} className="animate-spin" /> Yükleniyor...
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center text-sm text-black/50">
          Henüz kayıt yok.
        </div>
      ) : (
        <ul className="divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white">
          {filtered.map((row) => {
            const image = def.imageField ? String(row[def.imageField] ?? "") : "";
            const hidden = row.published === false;
            return (
              <li key={row.id} className="flex items-center gap-4 px-4 py-3 hover:bg-surface">
                <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {image && <img src={image} alt="" className="h-full w-full object-cover" />}
                </div>
                <button
                  className="min-w-0 flex-1 text-left"
                  onClick={() => setEditing({ id: row.id, values: toForm(def.fields, row) })}
                >
                  <p className={`truncate font-bold ${hidden ? "text-black/40" : "text-black"}`}>
                    {String(row[def.titleField] ?? "(başlıksız)")}
                  </p>
                  {def.subtitleField && (
                    <p className="truncate text-xs text-black/50">{String(row[def.subtitleField] ?? "")}</p>
                  )}
                </button>
                {hidden && (
                  <span className="hidden rounded-full bg-black/5 px-2 py-1 text-[10px] font-bold uppercase text-black/50 sm:inline">
                    Taslak
                  </span>
                )}
                <div className="flex shrink-0 items-center gap-1">
                  {def.publicPath && typeof row.slug === "string" && !hidden && (
                    <a
                      href={`${def.publicPath}/${row.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Sitede görüntüle"
                      className="rounded-lg p-2 text-black/40 hover:bg-black/5 hover:text-black"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <button
                    onClick={() => togglePublished(row)}
                    title={hidden ? "Yayınla" : "Yayından kaldır"}
                    className="rounded-lg p-2 text-black/40 hover:bg-black/5 hover:text-black"
                  >
                    {hidden ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  <button
                    onClick={() => setEditing({ id: row.id, values: toForm(def.fields, row) })}
                    title="Düzenle"
                    className="rounded-lg p-2 text-black/40 hover:bg-black/5 hover:text-black"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => remove(row)}
                    title="Sil"
                    className="rounded-lg p-2 text-black/40 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
