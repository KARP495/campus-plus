import { notFound } from "next/navigation";
import { stages } from "@/lib/data";
import { Crumb } from "@/components/ui";
import StageDetail from "@/components/StageDetail";

export function generateStaticParams() { return stages.map((s) => ({ id: s.id })); }

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = stages.find((x) => x.id === id);
  if (!s) notFound();
  return (
    <>
      <Crumb items={[{ label: "Stages", href: "/stages" }, { label: s.titre }]} />
      <StageDetail s={s} />
    </>
  );
}
