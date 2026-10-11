import { Suspense } from "react";
import { PageHeader } from "@/components/ui";
import DemarchesList from "@/components/DemarchesList";

export const metadata = { title: "Démarches administratives — Campus+" };

export default function Page() {
  return (
    <>
      <PageHeader titre="Démarches administratives" texte="Toutes les procédures par établissement et par catégorie, expliquées étape par étape." />
      <Suspense fallback={null}><DemarchesList /></Suspense>
    </>
  );
}
