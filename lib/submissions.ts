// Ziyaretçi formlarının (iletişim, bülten) Firestore'a yazılması.

import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore/lite";
import { z } from "zod";
import { COLLECTIONS, getDb } from "./firebase";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Lütfen adınızı girin.").max(100),
  email: z.string().trim().email("Geçerli bir e-posta adresi girin.").max(200),
  message: z.string().trim().min(10, "Mesajınız en az 10 karakter olmalı.").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export async function sendContactMessage(input: ContactInput) {
  const data = contactSchema.parse(input);
  await addDoc(collection(getDb(), COLLECTIONS.messages), {
    ...data,
    read: false,
    createdAt: serverTimestamp(),
  });
}

export const emailSchema = z.string().trim().toLowerCase().email("Geçerli bir e-posta adresi girin.");

export async function subscribeNewsletter(rawEmail: string) {
  const email = emailSchema.parse(rawEmail);
  // Doküman kimliği e-posta olduğu için aynı adres ikinci kez eklenmez.
  await setDoc(doc(getDb(), COLLECTIONS.subscribers, email), {
    email,
    createdAt: serverTimestamp(),
  });
}
