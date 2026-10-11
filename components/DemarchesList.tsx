"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, GraduationCap, Wallet, IdCard, FileCheck, ArrowRight } from "lucide-react";
import { demarches } from "@/lib/data";

const CATS = ["Toutes", "Inscription", "Bourse", "Carte", "Attestation"] as const;
const ICON = { Inscription: GraduationCap, Bourse: Wallet, Carte: IdCard, Attestation: FileCheck } as const;

export default function DemarchesList() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState<(typeof CATS)[number]>("Toutes");
  const result = useMemo(() => demarches.filter((d) => (cat === "Toutes" || d.categorie === cat) && (!q || (d.titre + d.etablissement).toLowerCase().includes(q.toLowerCase()))), [q, cat]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <label className="relative block">
        <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
        <input className="field pl-10" placeholder="Rechercher une démarche…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Rechercher une démarche" />
      </label>
      <div className="mt-4 flex flex-wrap gap-2">
        {CATS.map((c) => <button key={c} onClick={() => setCat(c)} className={`chip ${cat === c ? "chip-active" : ""}`}>{c}</button>)}
      </div>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {result.map((d) => {
          const Icon = ICON[d.categorie];
          return (
            <li key={d.slug}>
              <Link href={`/demarches/${d.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-colors hover:border-campus">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-campus-light text-campus"><Icon size={22} /></span>
                  <div>
                    <h3 className="text-lg font-extrabold leading-snug">{d.titre}</h3>
                    <p className="text-sm text-ink-soft">{d.etablissement}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-soft">{d.resume}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="badge">{d.categorie}</span>
                  <span className="text-xs text-ink-soft">{d.date}</span>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-campus">Voir la fiche <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </li>
          );
        })}
        {result.length === 0 && <li className="rounded-2xl border border-dashed border-line p-10 text-center text-ink-soft md:col-span-2">Aucune démarche trouvée. Essaie « inscription » ou « bourse ».</li>}
      </ul>
    </div>
  );
}
