"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { services } from "@/lib/data";
import CoverArt from "./CoverArt";
import { Avatar, Stars } from "./ui";

const CATS = ["Tous", "Création", "Numérique", "Apprentissage", "Événementiel"] as const;
const TONE = { Création: "blue", Numérique: "night", Apprentissage: "green", Événementiel: "rose" } as const;

export default function ServicesList() {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const result = useMemo(() => services.filter((s) => (cat === "Tous" || s.categorie === cat) && (!q || (s.titre + s.auteur + s.competences.join(" ")).toLowerCase().includes(q.toLowerCase()))), [q, cat]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <label className="relative block">
        <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
        <input className="field pl-10" placeholder="Rechercher un service, un talent…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Rechercher un service" />
      </label>
      <div className="mt-4 flex flex-wrap gap-2">{CATS.map((c) => <button key={c} onClick={() => setCat(c)} className={`chip ${cat === c ? "chip-active" : ""}`}>{c}</button>)}</div>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {result.map((s) => (
          <li key={s.id}>
            <Link href={`/services/${s.id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-colors hover:border-campus">
              <CoverArt seed={s.seed} tone={TONE[s.categorie]} className="h-36 w-full" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-extrabold leading-snug">{s.titre}</h3>
                <div className="mt-3 flex items-center gap-2"><Avatar initiales={s.initiales} size={28} /><span className="text-sm font-medium">{s.auteur}</span></div>
                <div className="mt-2 flex items-center justify-between"><Stars note={s.note} avis={s.avis} /><span className="badge">{s.categorie}</span></div>
                <p className="mt-3 flex items-center gap-1 text-xs text-ink-soft"><MapPin size={13} /> {s.zone}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="text-sm font-extrabold text-campus">{s.prix}</span>
                  <span className="btn-primary px-4 py-2">Contacter</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
        {result.length === 0 && <li className="rounded-2xl border border-dashed border-line p-10 text-center text-ink-soft sm:col-span-2 lg:col-span-3">Aucun service ne correspond pour l&apos;instant. Essaie une autre catégorie.</li>}
      </ul>
    </div>
  );
}
