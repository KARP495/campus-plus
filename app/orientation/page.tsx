import { Suspense } from "react";
import { PageHeader } from "@/components/ui";
import OrientationList from "@/components/OrientationList";

export const metadata = { title: "Orientation et formations — Campus+" };

export default function Page() {
  return (
    <>
      <PageHeader titre="Orientation et formations" texte="Découvre les formations disponibles à l'UAC et dans les autres établissements, compare-les et repère les débouchés." />
      <Suspense fallback={null}><OrientationList /></Suspense>
    </>
  );
}
