"use client";
import { useState } from "react";
import { User, Sparkles, ClipboardList, Heart, Settings, Star } from "lucide-react";
import { Avatar, Stars } from "./ui";
import CoverArt from "./CoverArt";

const MENU = [
  { label: "Mon profil", icon: User }, { label: "Mes services", icon: Sparkles }, { label: "Mes candidatures", icon: ClipboardList },
  { label: "Mes favoris", icon: Heart }, { label: "Paramètres", icon: Settings },
] as const;
const TABS = ["Présentation", "Compétences", "Réalisations", "Avis"] as const;
const COMP = ["Photoshop", "Canva", "Illustrator", "Montage vidéo", "Communication"];
const AVIS = [
  { auteur: "Association Étincelle", note: 5, texte: "Affiche livrée dans les temps, très à l'écoute de nos remarques." },
  { auteur: "Boutique Wémè", note: 4, texte: "Logo propre et professionnel. Un échange de plus aurait été utile sur les couleurs." },
];

export default function Profil() {
  const [menu, setMenu] = useState<(typeof MENU)[number]["label"]>("Mon profil");
  const [tab, setTab] = useState<(typeof TABS)[number]>("Présentation");

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[240px_1fr]">
      <nav aria-label="Espace personnel" className="flex gap-1 overflow-x-auto lg:flex-col">
        {MENU.map((m) => (
          <button key={m.label} onClick={() => setMenu(m.label)} className={`flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${menu === m.label ? "bg-campus text-white" : "text-ink-soft hover:bg-campus-light hover:text-campus"}`}>
            <m.icon size={17} /> {m.label}
          </button>
        ))}
      </nav>

      <section>
        {menu !== "Mon profil" ? (
          <div className="rounded-2xl border border-dashed border-line bg-white p-12 text-center">
            <p className="font-display text-xl font-extrabold">{menu}</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">Cet espace n&apos;est pas disponible dans le prototype : il n&apos;y a pas de compte réel.</p>
          </div>
        ) : (
          <>
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
              <CoverArt seed={5} className="h-28 w-full" />
              <div className="flex flex-wrap items-end justify-between gap-4 px-6 pb-6">
                <div className="-mt-10 flex items-end gap-4">
                  <span className="rounded-full ring-4 ring-white"><Avatar initiales="AH" size={84} /></span>
                  <div className="pb-1"><h1 className="text-2xl font-extrabold">Aïcha Houngnon</h1><p className="text-sm text-ink-soft">Étudiante · Graphisme · Communication</p><Stars note={4.8} avis={12} /></div>
                </div>
                <button className="btn-ghost">Modifier mon profil</button>
              </div>
            </div>

            <div role="tablist" className="mt-6 flex gap-1 overflow-x-auto border-b border-line">
              {TABS.map((t) => (
                <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold ${tab === t ? "border-campus text-campus" : "border-transparent text-ink-soft hover:text-ink"}`}>{t}</button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-white p-6 shadow-soft">
              {tab === "Présentation" && (<><h2 className="font-display text-lg font-extrabold">À propos de moi</h2><p className="mt-2 max-w-prose leading-relaxed text-ink-soft">Passionnée par le design et la communication visuelle, je réalise des visuels créatifs pour donner vie à vos idées. Disponible et à l&apos;écoute, je m&apos;adapte à vos besoins.</p></>)}
              {tab === "Compétences" && (<div className="flex flex-wrap gap-2">{COMP.map((c) => <span key={c} className="badge px-3 py-1 text-sm">{c}</span>)}</div>)}
              {tab === "Réalisations" && (<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <CoverArt key={n} seed={n + 30} className="aspect-[4/3] w-full rounded-xl" />)}</div>)}
              {tab === "Avis" && (<ul className="space-y-5">{AVIS.map((a) => (<li key={a.auteur}><p className="flex items-center gap-2 text-sm font-bold">{a.auteur} <span className="flex">{Array.from({ length: a.note }).map((_, i) => <Star key={i} size={13} className="fill-warn text-warn" />)}</span></p><p className="mt-1 text-sm text-ink-soft">{a.texte}</p></li>))}</ul>)}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
