"use client";

import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { ZodError } from "zod";
import { subscribeNewsletter } from "@/lib/submissions";

type Status = "idle" | "loading" | "success" | "error";

export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await subscribeNewsletter(email);
      setStatus("success");
      setMessage("Teşekkürler! Bültenimize abone oldunuz.");
      setEmail("");
    } catch (error) {
      // Aynı e-posta tekrar gönderilirse kurallar güncellemeyi reddeder; bu zaten abone demektir.
      if (error instanceof FirebaseError && error.code === "permission-denied") {
        setStatus("success");
        setMessage("Bu e-posta adresi zaten abone.");
        setEmail("");
        return;
      }
      setStatus("error");
      setMessage(error instanceof ZodError ? error.issues[0].message : "Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return { email, setEmail, status, message, submit };
}
