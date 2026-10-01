"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FirebaseError } from "firebase/app";
import {
  BookOpen,
  Briefcase,
  ExternalLink,
  LayoutDashboard,
  Loader2,
  LogOut,
  Mail,
  Menu,
  MessageSquareQuote,
  Settings,
  Sparkles,
  Users,
  UsersRound,
  X,
} from "lucide-react";
import { isFirebaseConfigured } from "@/lib/firebase";
import { AuthProvider, useAdminAuth } from "./AuthProvider";
import { inputClass } from "./FieldInput";

const nav = [
  { href: "/admin", label: "Genel Bakış", icon: LayoutDashboard },
  { href: "/admin/messages", label: "Mesajlar", icon: Mail },
  { href: "/admin/subscribers", label: "Aboneler", icon: Users },
  { href: "/admin/blog", label: "Blog", icon: BookOpen },
  { href: "/admin/projects", label: "Projeler", icon: Briefcase },
  { href: "/admin/services", label: "Hizmetler", icon: Sparkles },
  { href: "/admin/testimonials", label: "Yorumlar", icon: MessageSquareQuote },
  { href: "/admin/team", label: "Ekip", icon: UsersRound },
  { href: "/admin/settings", label: "Site Ayarları", icon: Settings },
];

function CenteredCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="w-full max-w-md space-y-6 rounded-3xl border border-black/5 bg-white p-8 shadow-xl">
        <Image src="/logo-full.png" alt="Entek Digital" width={300} height={100} className="h-16 w-auto" unoptimized />
        {children}
      </div>
    </div>
  );
}

function NotConfigured() {
  return (
    <CenteredCard>
      <h1 className="text-2xl font-heading font-bold">Firebase yapılandırılmamış</h1>
      <p className="text-sm leading-relaxed text-black/60">
        Proje kökünde <code className="rounded bg-black/5 px-1">.env.local</code> dosyasına{" "}
        <code className="rounded bg-black/5 px-1">NEXT_PUBLIC_FIREBASE_*</code> değişkenlerini ekleyin (örnek için{" "}
        <code className="rounded bg-black/5 px-1">.env.example</code>) ve sunucuyu yeniden başlatın.
      </p>
    </CenteredCard>
  );
}

function LoginForm() {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await login(email, password);
    } catch (err) {
      const code = err instanceof FirebaseError ? err.code : "";
      setError(
        code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found"
          ? "E-posta veya şifre hatalı."
          : code === "auth/too-many-requests"
            ? "Çok fazla deneme yapıldı, biraz sonra tekrar deneyin."
            : "Giriş yapılamadı."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <CenteredCard>
      <div>
        <h1 className="text-2xl font-heading font-bold">Yönetim Paneli</h1>
        <p className="text-sm text-black/50">Devam etmek için giriş yapın.</p>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <input type="email" required autoComplete="email" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        <input type="password" required autoComplete="current-password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-bold text-white hover:bg-primary-neon disabled:opacity-60"
        >
          {busy && <Loader2 size={16} className="animate-spin" />} Giriş yap
        </button>
      </form>
    </CenteredCard>
  );
}

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();

  return (
    <div className="flex h-full flex-col">
      <div className="px-6 py-6">
        <Image src="/logo-full.png" alt="Entek Digital" width={300} height={100} className="h-12 w-auto" unoptimized />
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                active ? "bg-black text-white" : "text-black/60 hover:bg-black/5 hover:text-black"
              }`}
            >
              <Icon size={18} /> {label}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-1 border-t border-black/5 p-3">
        <a
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-black/60 hover:bg-black/5 hover:text-black"
        >
          <ExternalLink size={18} /> Siteyi görüntüle
        </a>
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-black/60 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} /> Çıkış yap
        </button>
        <p className="truncate px-3 pt-2 text-xs text-black/40">{user?.email}</p>
      </div>
    </div>
  );
}

function Gate({ children }: { children: React.ReactNode }) {
  const { user, isAdmin, loading, logout } = useAdminAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <Loader2 className="animate-spin text-primary-neon" />
      </div>
    );
  }

  if (!user) return <LoginForm />;

  if (!isAdmin) {
    return (
      <CenteredCard>
        <h1 className="text-2xl font-heading font-bold">Yetkiniz yok</h1>
        <p className="text-sm leading-relaxed text-black/60">
          <strong>{user.email}</strong> hesabı yönetici olarak tanımlı değil. Firebase konsolunda Firestore&apos;a{" "}
          <code className="rounded bg-black/5 px-1">admins</code> koleksiyonu altında, kimliği bu e-posta adresi olan bir
          doküman ekleyin.
        </p>
        <button onClick={logout} className="w-full rounded-xl border border-black/10 py-3 text-sm font-bold hover:bg-black/5">
          Farklı hesapla giriş yap
        </button>
      </CenteredCard>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-black/5 bg-white lg:block">
        <Sidebar />
      </aside>

      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-black/5 bg-white px-4 py-3 lg:hidden">
        <Image src="/logo-full.png" alt="Entek Digital" width={300} height={100} className="h-10 w-auto" unoptimized />
        <button onClick={() => setMenuOpen(true)} className="rounded-lg p-2 hover:bg-black/5" aria-label="Menüyü aç">
          <Menu size={22} />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-72 bg-white shadow-2xl">
            <button onClick={() => setMenuOpen(false)} className="absolute right-3 top-5 rounded-lg p-2 hover:bg-black/5" aria-label="Menüyü kapat">
              <X size={20} />
            </button>
            <Sidebar onNavigate={() => setMenuOpen(false)} />
          </aside>
        </div>
      )}

      <main className="px-4 py-8 lg:ml-64 lg:px-10">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  );
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  if (!isFirebaseConfigured) return <NotConfigured />;
  return (
    <AuthProvider>
      <Gate>{children}</Gate>
    </AuthProvider>
  );
}
