import { notFound } from "next/navigation";
import CollectionManager from "@/components/admin/CollectionManager";
import { collectionDefs } from "@/components/admin/schemas";

export default async function AdminCollectionPage({ params }: PageProps<"/admin/[collection]">) {
  const { collection } = await params;
  const def = collectionDefs[collection];
  if (!def) notFound();
  return <CollectionManager key={def.key} def={def} />;
}
