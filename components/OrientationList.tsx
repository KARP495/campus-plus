"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, ChevronDown, GraduationCap, Clock, ListChecks } from "lucide-react";
import { formations } from "@/lib/data";
import CoverArt from "./CoverArt";

const unique = (arr: string[]) => Array.from(new Set(arr));

export default function OrientationList() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [domaine, setDomaine] = useState("");
  const [niveau, setNiveau] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const result = useMemo(() => formations.filter((f) =>
    (!domaine || f.domaine === domaine) && (!niveau || f.niveau === niveau) &&
    (!q || (f.titre + f.etablissement + f.domaine).toLowerCase().includes(q.toLowerCase()))), [q, domaine, niveau]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid gap-3 md:grid-cols-[1fr_200px_200px]">
        <label className="relative">
          <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
          <input className="field pl-10" placeholder="Rechercher une formation, un établissement…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Rechercher une formation" />
        </label>
        <select className="field" value={domaine} onChange={(e) => setDomaine(e.target.value)} aria-label="Domaine">
          <option value="">Tous les domaines</option>
          {unique(formations.map((f) => f.domaine)).map((d) => <option key={d}>{d}</option>)}
        </select>
        <select className="field" value={niveau} onChange={(e) => setNiveau(e.target.value)} aria-label="Niveau">
          <option value="">Tous les niveaux</option>
          {unique(formations.map((f) => f.niveau)).map((d) => <option key={d}>{d}</option>)}
        </select>
      </div>

      <p className="mt-6 text-sm text-ink-soft">{result.length} formation{result.length > 1 ? "s" : ""}</p>
      <ul className="mt-3 space-y-4">
        {result.map((f, i) => (
          <li key={f.id} className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
              <CoverArt seed={i + 3} className="h-32 w-full sm:h-full" />
              <div className="p-5">
                <h3 className="text-lg font-extrabold">{f.titre}</h3>
                <p className="text-sm text-ink-soft">{f.etablissement}</p>
                <div className="mt-3 flex flex-wrap gap-1.5"><span className="badge">{f.niveau}</span><span className="badge">{f.domaine}</span><span className="badge">{f.duree}</span></div>
                <button onClick={() => setOpen(open === f.id ? null : f.id)} aria-expanded={open === f.id} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-campus">
                  Voir les détails <ChevronDown size={16} className={`transition-transform ${open === f.id ? "rotate-180" : ""}`} />
                </button>
                {open === f.id && (
                  <dl className="mt-4 grid gap-3 border-t border-line pt-4 text-sm sm:grid-cols-3">
                    <div><dt className="flex items-center gap-1.5 font-semibold"><GraduationCap size={15} className="text-campus" /> Conditions d&apos;accès</dt><dd className="mt-1 text-ink-soft">{f.prerequis}</dd></div>
                    <div><dt className="flex items-center gap-1.5 font-semibold"><Clock size={15} className="text-campus" /> Durée</dt><dd className="mt-1 text-ink-soft">{f.duree}</dd></div>
                    <div><dt className="flex items-center gap-1.5 font-semibold"><ListChecks size={15} className="text-campus" /> Débouchés</dt><dd className="mt-1 text-ink-soft">{f.debouches.join(", ")}</dd></div>
                  </dl>
                )}
              </div>
            </div>
          </li>
        ))}
        {result.length === 0 && <li className="rounded-2xl border border-dashed border-line p-10 text-center text-ink-soft">Aucune formation ne correspond. Essaie un autre mot ou retire un filtre.</li>}
      </ul>
    </div>
  );
}
