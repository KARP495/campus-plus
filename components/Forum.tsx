"use client";
import { useMemo, useState } from "react";
import { Plus, MessageSquare, Eye, Search } from "lucide-react";
import { sujetsInitiaux, type Sujet } from "@/lib/data";
import { Avatar, Modal } from "./ui";

const CATS = ["Tous", "Orientation", "Vie étudiante", "Emploi", "Projets"] as const;

export default function Forum() {
  const [sujets, setSujets] = useState<Sujet[]>(sujetsInitiaux);
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState<Sujet["categorie"]>("Orientation");

  const result = useMemo(() => sujets.filter((s) => (cat === "Tous" || s.categorie === cat) && (!q || s.titre.toLowerCase().includes(q.toLowerCase()))), [sujets, cat, q]);

  function publier() {
    if (!titre.trim()) return;
    setSujets((s) => [{ id: `n${Date.now()}`, titre: titre.trim(), auteur: "Toi", categorie, reponses: 0, vues: 1, quand: "à l'instant" }, ...s]);
    setTitre(""); setOpen(false);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
          <input className="field pl-10" placeholder="Rechercher un sujet…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Rechercher un sujet" />
        </label>
        <button onClick={() => setOpen(true)} className="btn-primary"><Plus size={16} /> Nouveau sujet</button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{CATS.map((c) => <button key={c} onClick={() => setCat(c)} className={`chip ${cat === c ? "chip-active" : ""}`}>{c}</button>)}</div>

      <ul className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
        {result.map((s) => (
          <li key={s.id} className="flex items-start gap-4 p-5 transition-colors hover:bg-campus-light/40">
            <Avatar initiales={s.auteur.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()} size={40} />
            <div className="min-w-0 flex-1">
              <h3 className="font-bold leading-snug">{s.titre}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft">
                <span className="badge">{s.categorie}</span>
                <span>{s.auteur} · {s.quand}</span>
                <span className="flex items-center gap-1"><MessageSquare size={13} />{s.reponses} réponses</span>
                <span className="flex items-center gap-1"><Eye size={13} />{s.vues} vues</span>
              </div>
            </div>
          </li>
        ))}
        {result.length === 0 && <li className="p-10 text-center text-ink-soft">Aucun sujet pour l&apos;instant. Lance la discussion avec « Nouveau sujet ».</li>}
      </ul>
      <p className="mt-4 text-xs text-ink-soft">Les réponses des étudiants sont des conseils, pas des informations officielles. Vérifie toujours auprès de ton établissement.</p>

      <Modal open={open} onClose={() => setOpen(false)} titre="Nouveau sujet">
        <label htmlFor="t" className="text-sm font-semibold">Ta question</label>
        <input id="t" className="field mt-2" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Ex. : Où trouver un modèle de CV ?" />
        <label htmlFor="c" className="mt-4 block text-sm font-semibold">Catégorie</label>
        <select id="c" className="field mt-2" value={categorie} onChange={(e) => setCategorie(e.target.value as Sujet["categorie"])}>
          {CATS.slice(1).map((c) => <option key={c}>{c}</option>)}
        </select>
        <button onClick={publier} disabled={!titre.trim()} className="btn-primary mt-5 w-full disabled:opacity-50">Publier le sujet</button>
      </Modal>
    </div>
  );
}
