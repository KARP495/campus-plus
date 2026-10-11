"use client";
import { useState } from "react";
import { Clock, Wallet, GraduationCap, MapPin, Send, Share2, CheckCircle2, Building2 } from "lucide-react";
import type { Stage } from "@/lib/data";
import CoverArt from "./CoverArt";
import { Modal } from "./ui";

export default function StageDetail({ s }: { s: Stage }) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const meta = [
    { icon: Clock, label: "Durée", v: s.duree }, { icon: Wallet, label: "Rémunération", v: s.remuneration },
    { icon: GraduationCap, label: "Niveau requis", v: s.niveau }, { icon: MapPin, label: "Lieu", v: s.ville },
  ];
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px]">
      <div>
        <div className="overflow-hidden rounded-3xl"><CoverArt seed={s.seed} className="h-40 w-full sm:h-52" /></div>
        <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{s.titre}</h1>
        <p className="mt-1 text-ink-soft">{s.entreprise} · {s.ville} · {s.publie}</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {meta.map((m) => (<div key={m.label} className="rounded-2xl border border-line bg-white p-4"><m.icon size={18} className="text-campus" /><p className="mt-2 text-xs text-ink-soft">{m.label}</p><p className="text-sm font-bold">{m.v}</p></div>))}
        </div>
        <h2 className="mt-8 text-lg font-extrabold">Missions principales</h2>
        <ul className="mt-3 space-y-2 text-sm">{s.missions.map((m) => <li key={m} className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-campus" />{m}</li>)}</ul>
        <h2 className="mt-8 text-lg font-extrabold">Profil recherché</h2>
        <ul className="mt-3 space-y-2 text-sm">{s.profil.map((m) => <li key={m} className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-ok" />{m}</li>)}</ul>
      </div>
      <aside className="h-fit space-y-4 lg:sticky lg:top-24">
        <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
          <button onClick={() => { setOpen(true); setDone(false); }} className="btn-primary w-full"><Send size={16} /> Postuler maintenant</button>
          <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }} className="btn-ghost mt-3 w-full"><Share2 size={16} /> {copied ? "Lien copié (simulé)" : "Partager"}</button>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
          <p className="flex items-center gap-2 font-display font-extrabold"><Building2 size={18} className="text-campus" /> À propos de {s.entreprise}</p>
          <p className="mt-2 text-sm text-ink-soft">{s.apropos}</p>
        </div>
      </aside>
      <Modal open={open} onClose={() => setOpen(false)} titre={done ? "Candidature simulée" : `Postuler chez ${s.entreprise}`}>
        {done ? (
          <>
            <p className="flex items-start gap-2 text-sm text-ink-soft"><CheckCircle2 className="mt-0.5 shrink-0 text-ok" size={18} /> Rien n&apos;a été envoyé : c&apos;est un prototype. Dans la version réelle, ton profil et ton CV seraient transmis à l&apos;entreprise.</p>
            <button onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">Fermer</button>
          </>
        ) : (
          <>
            <label htmlFor="lm" className="text-sm font-semibold">Un mot pour l&apos;entreprise (facultatif)</label>
            <textarea id="lm" rows={4} className="field mt-2" placeholder="Pourquoi cette offre te motive ?" />
            <button onClick={() => setDone(true)} className="btn-primary mt-4 w-full">Envoyer ma candidature</button>
          </>
        )}
      </Modal>
    </div>
  );
}
