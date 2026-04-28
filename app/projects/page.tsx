import SelectedWorks from "@/components/SelectedWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çalışmalarımız | Entek Digital Portfolyo",
  description: "Entek Digital tarafından hayata geçirilen başarılı projeler ve dijital çalışmalarımız. Markaların dijital dönüşüm yolculuğuna tanık olun.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <SelectedWorks />
    </main>
  );
}
