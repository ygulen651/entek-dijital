"use client";

import React, { useCallback, useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, orderBy, query, Timestamp, updateDoc } from "firebase/firestore/lite";
import { Download, Loader2, Mail, MailOpen, Reply, Trash2 } from "lucide-react";
import { COLLECTIONS, getDb } from "@/lib/firebase";
import type { ContactMessage, Subscriber } from "@/lib/types";

const formatDate = (ms: number) =>
  ms ? new Date(ms).toLocaleString("tr-TR", { dateStyle: "medium", timeStyle: "short" }) : "";

const toMillis = (value: unknown) => (value instanceof Timestamp ? value.toMillis() : 0);

function useCollectionRows<T>(name: string, map: (id: string, data: Record<string, unknown>) => T) {
  const [rows, setRows] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      const snap = await getDocs(query(collection(getDb(), name), orderBy("createdAt", "desc")));
      setRows(snap.docs.map((d) => map(d.id, d.data())));
      setError("");
    } catch (err) {
      console.error(err);
      setError("Kayıtlar yüklenemedi. Yönetici yetkiniz olduğundan emin olun.");
    } finally {
      setLoading(false);
    }
    // map her render'da yeni oluşturulduğu için bağımlılıklara eklenmiyor
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    // İlk yükleme: load, state'i yalnızca Firestore yanıtından sonra günceller.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  return { rows, loading, error, load };
}

function Loading() {
  return (
    <div className="flex items-center gap-2 text-sm text-black/50">
      <Loader2 size={16} className="animate-spin" /> Yükleniyor...
    </div>
  );
}

export function MessagesPanel() {
  const { rows, loading, error, load } = useCollectionRows<ContactMessage>(COLLECTIONS.messages, (id, d) => ({
    id,
    name: String(d.name ?? ""),
    email: String(d.email ?? ""),
    message: String(d.message ?? ""),
    read: Boolean(d.read),
    createdAt: toMillis(d.createdAt),
  }));
  const [openId, setOpenId] = useState<string | null>(null);

  const open = async (msg: ContactMessage) => {
    setOpenId(openId === msg.id ? null : msg.id);
    if (!msg.read) {
      await updateDoc(doc(getDb(), COLLECTIONS.messages, msg.id), { read: true });
      load();
    }
  };

  const remove = async (msg: ContactMessage) => {
    if (!confirm(`${msg.name} adlı kişinin mesajı silinsin mi?`)) return;
    await deleteDoc(doc(getDb(), COLLECTIONS.messages, msg.id));
    load();
  };

  const unread = rows.filter((r) => !r.read).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-black">Mesajlar</h1>
        <p className="text-sm text-black/50">
          İletişim formundan gelen {rows.length} mesaj{unread > 0 && `, ${unread} okunmamış`}
        </p>
      </div>
      {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {loading ? (
        <Loading />
      ) : rows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center text-sm text-black/50">
          Henüz mesaj yok.
        </div>
      ) : (
        <ul className="divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white">
          {rows.map((msg) => (
            <li key={msg.id}>
              <button onClick={() => open(msg)} className="flex w-full items-center gap-4 px-4 py-3 text-left hover:bg-surface">
                {msg.read ? (
                  <MailOpen size={18} className="shrink-0 text-black/30" />
                ) : (
                  <Mail size={18} className="shrink-0 text-primary-neon" />
                )}
                <div className="min-w-0 flex-1">
                  <p className={`truncate ${msg.read ? "text-black/70" : "font-bold text-black"}`}>
                    {msg.name} <span className="font-normal text-black/40">— {msg.email}</span>
                  </p>
                  <p className="truncate text-xs text-black/50">{msg.message}</p>
                </div>
                <span className="hidden shrink-0 text-xs text-black/40 sm:inline">{formatDate(msg.createdAt)}</span>
              </button>
              {openId === msg.id && (
                <div className="space-y-4 border-t border-black/5 bg-surface px-4 py-5 sm:px-12">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-black/80">{msg.message}</p>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${msg.email}?subject=${encodeURIComponent("Entek Digital - Mesajınız hakkında")}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white hover:bg-primary-neon"
                    >
                      <Reply size={14} /> Yanıtla
                    </a>
                    <button
                      onClick={() => remove(msg)}
                      className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={14} /> Sil
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SubscribersPanel() {
  const { rows, loading, error, load } = useCollectionRows<Subscriber>(COLLECTIONS.subscribers, (id, d) => ({
    id,
    email: String(d.email ?? id),
    createdAt: toMillis(d.createdAt),
  }));

  const remove = async (sub: Subscriber) => {
    if (!confirm(`${sub.email} aboneliği silinsin mi?`)) return;
    await deleteDoc(doc(getDb(), COLLECTIONS.subscribers, sub.id));
    load();
  };

  const exportCsv = () => {
    const csv = ["email,tarih", ...rows.map((r) => `${r.email},${new Date(r.createdAt).toISOString()}`)].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "bulten-aboneleri.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-black">Bülten Aboneleri</h1>
          <p className="text-sm text-black/50">{rows.length} abone</p>
        </div>
        {rows.length > 0 && (
          <button
            onClick={exportCsv}
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-bold text-black hover:border-primary-neon hover:text-primary-neon"
          >
            <Download size={16} /> CSV indir
          </button>
        )}
      </div>
      {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
      {loading ? (
        <Loading />
      ) : rows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/10 bg-white p-10 text-center text-sm text-black/50">
          Henüz abone yok.
        </div>
      ) : (
        <ul className="divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white">
          {rows.map((sub) => (
            <li key={sub.id} className="flex items-center gap-4 px-4 py-3">
              <span className="min-w-0 flex-1 truncate text-sm font-bold text-black">{sub.email}</span>
              <span className="hidden text-xs text-black/40 sm:inline">{formatDate(sub.createdAt)}</span>
              <button
                onClick={() => remove(sub)}
                title="Sil"
                className="rounded-lg p-2 text-black/40 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
