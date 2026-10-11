import { Suspense } from "react";
import { PageHeader } from "@/components/ui";
import ServicesList from "@/components/ServicesList";

export const metadata = { title: "Services étudiants — Campus+" };

export default function Page() {
  return (
    <>
      <PageHeader titre="Services étudiants" texte="Trouve des étudiants qui proposent leurs compétences : création, numérique, cours, événementiel." />
      <Suspense fallback={null}><ServicesList /></Suspense>
    </>
  );
}
