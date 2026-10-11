import { notFound } from "next/navigation";
import { demarches } from "@/lib/data";
import { Crumb } from "@/components/ui";
import DemarcheDetail from "@/components/DemarcheDetail";

export function generateStaticParams() { return demarches.map((d) => ({ slug: d.slug })); }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = demarches.find((x) => x.slug === slug);
  if (!d) notFound();
  return (
    <>
      <Crumb items={[{ label: "Démarches", href: "/demarches" }, { label: d.titre }]} />
      <DemarcheDetail d={d} />
    </>
  );
}
