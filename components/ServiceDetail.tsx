"use client";
import { useState } from "react";
import { MapPin, Clock, Tag, MessageCircle, CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/data";
import CoverArt from "./CoverArt";
import { Avatar, Modal, Stars } from "./ui";

export default function ServiceDetail({ s }: { s: Service }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="overflow-hidden rounded-3xl"><CoverArt seed={s.seed} className="h-56 w-full sm:h-72" /></div>
        <div className="mt-6 flex items-center gap-3"><Avatar initiales={s.initiales} size={48} /><div><p className="font-bold">{s.auteur}</p><Stars note={s.note} avis={s.avis} /></div></div>
        <h1 className="mt-4 text-3xl font-extrabold">{s.titre}</h1>
        <h2 className="mt-8 text-lg font-extrabold">Description</h2>
        <p className="mt-2 leading-relaxed text-ink-soft">{s.description}</p>
        <h2 className="mt-8 text-lg font-extrabold">Compétences déclarées</h2>
        <div className="mt-3 flex flex-wrap gap-2">{s.competences.map((c) => <span key={c} className="badge px-3 py-1 text-sm">{c}</span>)}</div>
        <p className="mt-6 text-xs text-ink-soft">Les compétences sont déclarées par l&apos;étudiant. Campus+ ne les certifie pas : vérifie les réalisations et les avis avant de confirmer.</p>
      </div>

      <aside className="h-fit space-y-4 rounded-2xl border border-line bg-white p-6 shadow-soft lg:sticky lg:top-24">
        <div><p className="text-xs text-ink-soft">À partir de</p><p className="font-display text-2xl font-extrabold text-campus">{s.prix}</p></div>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2"><Tag size={17} className="shrink-0 text-campus" />{s.categorie}</li>
          <li className="flex gap-2"><Clock size={17} className="shrink-0 text-campus" />{s.dispo}</li>
          <li className="flex gap-2"><MapPin size={17} className="shrink-0 text-campus" />{s.zone}</li>
        </ul>
        <button onClick={() => { setOpen(true); setSent(false); }} className="btn-primary w-full"><MessageCircle size={16} /> Contacter {s.auteur.split(" ")[0]}</button>
      </aside>

      <Modal open={open} onClose={() => setOpen(false)} titre={sent ? "Message simulé" : `Contacter ${s.auteur.split(" ")[0]}`}>
        {sent ? (
          <>
            <p className="flex items-start gap-2 text-sm text-ink-soft"><CheckCircle2 className="mt-0.5 shrink-0 text-ok" size={18} /> Dans le prototype, aucun message n&apos;est envoyé. Dans la version réelle, {s.auteur.split(" ")[0]} le recevrait et vous pourriez convenir du prix, du délai et des livrables.</p>
            <button onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">Fermer</button>
          </>
        ) : (
          <>
            <label className="text-sm font-semibold" htmlFor="msg">Décris ton besoin</label>
            <textarea id="msg" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} className="field mt-2" placeholder="Ex. : une affiche pour la fête de l'association, livrable vendredi." />
            <button onClick={() => setSent(true)} className="btn-primary mt-4 w-full">Envoyer la demande</button>
          </>
        )}
      </Modal>
    </div>
  );
}
