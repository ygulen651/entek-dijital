"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import { COLLECTIONS, getDb, getFirebaseApp, isFirebaseConfigured } from "@/lib/firebase";

interface AuthState {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function useAdminAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAdminAuth, AuthProvider içinde kullanılmalı.");
  return ctx;
}

// Yönetici yetkisi: Firestore'da admins/{e-posta} dokümanı olan kullanıcılar.
async function checkAdmin(user: User) {
  if (!user.email) return false;
  try {
    const snap = await getDoc(doc(getDb(), COLLECTIONS.admins, user.email.toLowerCase()));
    return snap.exists();
  } catch {
    return false;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    return onAuthStateChanged(getAuth(getFirebaseApp()), async (nextUser) => {
      setLoading(true);
      setUser(nextUser);
      setIsAdmin(nextUser ? await checkAdmin(nextUser) : false);
      setLoading(false);
    });
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(getAuth(getFirebaseApp()), email, password);
  };

  const logout = async () => {
    await signOut(getAuth(getFirebaseApp()));
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>{children}</AuthContext.Provider>
  );
}
