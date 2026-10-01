import ContactView from "@/components/ContactView";
import { getSettings } from "@/lib/content";

export default async function ContactPage() {
  const settings = await getSettings();
  return <ContactView settings={settings} />;
}
