"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import { formations, demarches, services, stages } from "@/lib/data";

const TABS = [
  { key: "orientation", label: "Formations", placeholder: "Une licence, un master, une filière…" },
  { key: "demarches", label: "Démarches", placeholder: "Inscription, bourse, carte d'étudiant…" },
  { key: "services", label: "Services", placeholder: "Affiche, tutorat, dépannage…" },
  { key: "stages", label: "Stages", placeholder: "Marketing, développeur, événementiel…" },
] as const;

export default function HeroSearch() {
  const router = useRouter();
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("orientation");
  const [q, setQ] = useState("");

  const suggestions = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    const pools: Record<string, { label: string; sub: string; href: string }[]> = {
      orientation: formations.map((f) => ({ label: f.titre, sub: f.etablissement, href: `/orientation?q=${encodeURIComponent(f.titre)}` })),
      demarches: demarches.map((d) => ({ label: d.titre, sub: d.etablissement, href: `/demarches/${d.slug}` })),
      services: services.map((x) => ({ label: x.titre, sub: x.auteur, href: `/services/${x.id}` })),
      stages: stages.map((x) => ({ label: x.titre, sub: x.entreprise, href: `/stages/${x.id}` })),
    };
    return pools[tab].filter((p) => (p.label + " " + p.sub).toLowerCase().includes(s)).slice(0, 4);
  }, [q, tab]);

  const current = TABS.find((t) => t.key === tab)!;

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); router.push(`/${tab}${q ? `?q=${encodeURIComponent(q)}` : ""}`); }}
      className="relative w-full max-w-xl"
    >
      <div role="tablist" aria-label="Que cherches-tu ?" className="mb-3 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button key={t.key} type="button" role="tab" aria-selected={tab === t.key} onClick={() => setTab(t.key)}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold sm:px-4 transition-colors ${tab === t.key ? "bg-white text-campus" : "bg-white/12 text-white/85 hover:bg-white/20"}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-lift">
        <Search className="ml-3 shrink-0 text-ink-soft" size={20} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={current.placeholder} aria-label="Recherche"
          className="min-w-0 flex-1 bg-transparent px-1 py-3 text-base text-ink placeholder:text-ink-soft/70 focus:outline-none" />
        <button type="submit" className="btn-primary px-5 py-3">Rechercher</button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl bg-white p-1.5 shadow-lift">
          {suggestions.map((s) => (
            <li key={s.href + s.label}>
              <a href={s.href} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 hover:bg-campus-light">
                <span className="min-w-0"><span className="block truncate text-sm font-semibold text-ink">{s.label}</span><span className="block truncate text-xs text-ink-soft">{s.sub}</span></span>
                <ArrowRight size={16} className="shrink-0 text-campus" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
