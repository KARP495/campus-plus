"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Clock, Wallet } from "lucide-react";
import { stages } from "@/lib/data";
import CoverArt from "./CoverArt";

const SECTEURS = ["Tous", "Marketing", "Informatique", "Événementiel", "Communication"] as const;

export default function StagesList() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [sec, setSec] = useState<(typeof SECTEURS)[number]>("Tous");
  const [ville, setVille] = useState("");
  const villes = Array.from(new Set(stages.map((s) => s.ville)));
  const result = useMemo(() => stages.filter((s) => (sec === "Tous" || s.secteur === sec) && (!ville || s.ville === ville) && (!q || (s.titre + s.entreprise).toLowerCase().includes(q.toLowerCase()))), [q, sec, ville]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid gap-3 md:grid-cols-[1fr_220px]">
        <label className="relative">
          <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
          <input className="field pl-10" placeholder="Rechercher une offre, une entreprise…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Rechercher une offre" />
        </label>
        <select className="field" value={ville} onChange={(e) => setVille(e.target.value)} aria-label="Ville"><option value="">Toutes les villes</option>{villes.map((v) => <option key={v}>{v}</option>)}</select>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{SECTEURS.map((c) => <button key={c} onClick={() => setSec(c)} className={`chip ${sec === c ? "chip-active" : ""}`}>{c}</button>)}</div>
      <ul className="mt-6 space-y-4">
        {result.map((s) => (
          <li key={s.id}>
            <Link href={`/stages/${s.id}`} className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-colors hover:border-campus sm:grid-cols-[150px_1fr]">
              <CoverArt seed={s.seed} className="h-24 w-full sm:h-full" />
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-extrabold">{s.titre}</h3><span className="badge">{s.secteur}</span></div>
                <p className="mt-0.5 text-sm font-medium text-ink-soft">{s.entreprise}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
                  <span className="flex items-center gap-1.5"><Clock size={15} />{s.duree}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={15} />{s.ville}</span>
                  <span className="flex items-center gap-1.5"><Wallet size={15} />{s.remuneration}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
        {result.length === 0 && <li className="rounded-2xl border border-dashed border-line p-10 text-center text-ink-soft">Aucune offre pour ces critères. Élargis la ville ou le secteur.</li>}
      </ul>
    </div>
  );
}
