import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

export function getFirebaseApp(): FirebaseApp {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase yapılandırılmamış. .env.local dosyasına NEXT_PUBLIC_FIREBASE_* değişkenlerini ekleyin.");
  }
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}

export function getDb(): Firestore {
  return getFirestore(getFirebaseApp());
}

export const COLLECTIONS = {
  blog: "blog",
  projects: "projects",
  services: "services",
  testimonials: "testimonials",
  team: "team",
  messages: "messages",
  subscribers: "subscribers",
  settings: "settings",
  admins: "admins",
} as const;

export const SETTINGS_DOC = "general";
