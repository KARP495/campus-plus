import { Suspense } from "react";
import { PageHeader } from "@/components/ui";
import StagesList from "@/components/StagesList";

export const metadata = { title: "Stages et opportunités — Campus+" };

export default function Page() {
  return (
    <>
      <PageHeader titre="Offres de stage" texte="Trouve le stage qui correspond à ton profil : missions, durée, conditions et entreprise." />
      <Suspense fallback={null}><StagesList /></Suspense>
    </>
  );
}
