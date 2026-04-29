import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Entek Digital ile Projenizi Başlatın",
  description: "Bize ulaşın ve projenizi birlikte planlayalım. Entek Digital uzman ekibiyle iletişime geçmek için formu doldurun veya doğrudan arayın.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
