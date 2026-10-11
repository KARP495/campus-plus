import { PageHeader } from "@/components/ui";
import Forum from "@/components/Forum";

export const metadata = { title: "Communauté étudiante — Campus+" };

export default function Page() {
  return (
    <>
      <PageHeader titre="Forum communautaire" texte="Pose tes questions, partage tes expériences et échange avec d'autres étudiants." />
      <Forum />
    </>
  );
}
