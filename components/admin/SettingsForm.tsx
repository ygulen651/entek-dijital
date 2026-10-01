"use client";

import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { Loader2, Save } from "lucide-react";
import { revalidateContent } from "@/app/actions";
import { defaultSettings } from "@/lib/defaults";
import { COLLECTIONS, getDb, SETTINGS_DOC } from "@/lib/firebase";
import FieldInput from "./FieldInput";
import { fromForm, toForm, validate, type FormValues } from "./form";
import { settingsFields } from "./schemas";

export default function SettingsForm() {
  const [values, setValues] = useState<FormValues | null>(null);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<{ type: "ok" | "error"; text: string } | null>(null);

  useEffect(() => {
    getDoc(doc(getDb(), COLLECTIONS.settings, SETTINGS_DOC))
      .then((snap) => setValues(toForm(settingsFields, { ...defaultSettings, ...(snap.data() ?? {}) })))
      .catch(() => setValues(toForm(settingsFields, defaultSettings as unknown as Record<string, unknown>)));
  }, []);

  const save = async () => {
    if (!values) return;
    const problem = validate(settingsFields, values);
    if (problem) return setNotice({ type: "error", text: problem });
    setSaving(true);
    setNotice(null);
    try {
      await setDoc(doc(getDb(), COLLECTIONS.settings, SETTINGS_DOC), fromForm(settingsFields, values));
      await revalidateContent();
      setNotice({ type: "ok", text: "Ayarlar kaydedildi." });
    } catch (err) {
      console.error(err);
      setNotice({ type: "error", text: "Kaydedilemedi. Yönetici yetkiniz olduğundan emin olun." });
    } finally {
      setSaving(false);
    }
  };

  if (!values) {
    return (
      <div className="flex items-center gap-2 text-sm text-black/50">
        <Loader2 size={16} className="animate-spin" /> Yükleniyor...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-black">Site Ayarları</h1>
          <p className="text-sm text-black/50">İletişim bilgileri, sosyal medya, SEO ve genel metinler.</p>
        </div>
        <button
          onClick={save}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-neon disabled:opacity-60"
        >
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />} Kaydet
        </button>
      </div>

      {notice && (
        <p className={`rounded-xl px-4 py-3 text-sm ${notice.type === "ok" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
          {notice.text}
        </p>
      )}

      <div className="space-y-6 rounded-2xl border border-black/5 bg-white p-6 md:p-8">
        {settingsFields.map((field) => (
          <FieldInput
            key={field.name}
            field={field}
            values={values}
            onChange={(name, value) => setValues((prev) => (prev ? { ...prev, [name]: value } : prev))}
          />
        ))}
      </div>
    </div>
  );
}
