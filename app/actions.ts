"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { CONTENT_TAG } from "@/lib/content";

// Admin panelinde bir kayıt değiştiğinde sitenin önbelleğini hemen temizler.
export async function revalidateContent() {
  revalidateTag(CONTENT_TAG, { expire: 0 });
  revalidatePath("/", "layout");
}
