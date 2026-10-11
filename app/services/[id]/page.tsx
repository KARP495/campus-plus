import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import { Crumb } from "@/components/ui";
import ServiceDetail from "@/components/ServiceDetail";

export function generateStaticParams() { return services.map((s) => ({ id: s.id })); }

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = services.find((x) => x.id === id);
  if (!s) notFound();
  return (
    <>
      <Crumb items={[{ label: "Services", href: "/services" }, { label: s.titre }]} />
      <ServiceDetail s={s} />
    </>
  );
}
