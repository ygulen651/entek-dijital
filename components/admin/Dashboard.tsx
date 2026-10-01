"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { collection, doc, getCount, getDoc, query, where, writeBatch } from "firebase/firestore/lite";
import { DatabaseZap, Loader2 } from "lucide-react";
import { revalidateContent } from "@/app/actions";
import {
  defaultBlogPosts,
  defaultProjects,
  defaultServices,
  defaultSettings,
  defaultTeam,
  defaultTestimonials,
} from "@/lib/defaults";
import { COLLECTIONS, getDb, SETTINGS_DOC } from "@/lib/firebase";
import { collectionDefs } from "./schemas";

const cards = [
  { key: "messages", label: "Okunmamış mesaj", href: "/admin/messages" },
  { key: "subscribers", label: "Bülten abonesi", href: "/admin/subscribers" },
  ...Object.values(collectionDefs).map((def) => ({ key: def.key, label: def.title, href: `/admin/${def.key}` })),
];

const seedGroups = [
  ["blog", defaultBlogPosts],
  ["projects", defaultProjects],
  ["services", defaultServices],
  ["testimonials", defaultTestimonials],
  ["team", defaultTeam],
] as const;

// Boş olan koleksiyonlara varsayılan içerikleri (sitede şu an görünenleri) aktarır.
// Dolu koleksiyonlara ve kaydedilmiş site ayarlarına dokunmaz.
async function seedDefaults(counts: Record<string, number>, hasSettings: boolean) {
  const db = getDb();
  const batch = writeBatch(db);
  for (const [key, items] of seedGroups) {
    if (counts[key] > 0) continue;
    for (const { id, ...data } of items) {
      batch.set(doc(db, collectionDefs[key].collection, id), { published: true, ...data });
    }
  }
  if (!hasSettings) batch.set(doc(db, COLLECTIONS.settings, SETTINGS_DOC), defaultSettings);
  await batch.commit();
}

export default function Dashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [hasSettings, setHasSettings] = useState<boolean | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    const db = getDb();
    try {
      const entries = await Promise.all(
        cards.map(async ({ key }) => {
          const q =
            key === "messages"
              ? query(collection(db, COLLECTIONS.messages), where("read", "==", false))
              : collection(db, collectionDefs[key]?.collection ?? key);
          const snap = await getCount(q);
          return [key, snap.data().count] as const;
        })
      );
      setCounts(Object.fromEntries(entries));
      const settings = await getDoc(doc(db, COLLECTIONS.settings, SETTINGS_DOC));
      setHasSettings(settings.exists());
    } catch (err) {
      console.error(err);
      setError("Veriler okunamadı. Firestore kurallarını yayınladığınızdan emin olun.");
    }
  };

  useEffect(() => {
    // İlk yükleme: load, state'i yalnızca Firestore yanıtından sonra günceller.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, []);

  const emptyGroups = seedGroups.filter(([key, items]) => items.length > 0 && counts[key] === 0).map(([key]) => key);
  const needsSeed = hasSettings === false || emptyGroups.length > 0;

  const handleSeed = async () => {
    const names = emptyGroups.map((key) => collectionDefs[key].title).join(", ");
    if (!confirm(`Boş bölümlere varsayılan içerikler aktarılsın mı?${names ? `

${names}` : ""}`)) return;
    setSeeding(true);
    try {
      await seedDefaults(counts, hasSettings === true);
      await revalidateContent();
      await load();
    } catch (err) {
      console.error(err);
      setError("İçerikler aktarılamadı.");
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold text-black">Genel Bakış</h1>
        <p className="text-sm text-black/50">Sitenin tüm içeriğini buradan yönetebilirsiniz.</p>
      </div>

      {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      {needsSeed && (
        <div className="flex flex-col gap-4 rounded-2xl border border-primary-neon/30 bg-primary-neon/5 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-black">Bazı bölümler boş</p>
            <p className="text-sm text-black/60">
              {emptyGroups.length > 0
                ? `${emptyGroups.map((key) => collectionDefs[key].title).join(", ")} bölümlerinde kayıt yok, bu yüzden sitede görünmüyorlar. `
                : ""}
              Hazır içerikleri aktarıp panelden düzenleyebilirsiniz. Dolu bölümlere ve ayarlarınıza dokunulmaz.
            </p>
          </div>
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-bold text-white hover:bg-primary-neon disabled:opacity-60"
          >
            {seeding ? <Loader2 size={16} className="animate-spin" /> : <DatabaseZap size={16} />}
            Hazır içerikleri aktar
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.key}
            href={card.href}
            className="rounded-2xl border border-black/5 bg-white p-5 transition hover:border-primary-neon/40 hover:shadow-lg"
          >
            <p className="text-3xl font-heading font-bold text-black">{counts[card.key] ?? "–"}</p>
            <p className="mt-1 text-sm text-black/50">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
