"use client";
import { useState } from "react";
import { MapPin, ListOrdered, Files, Clock, Wallet, Phone, BadgeCheck, Download, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { Demarche } from "@/lib/data";
import { Modal } from "./ui";

const TABS = ["Vue d'ensemble", "Étapes", "Pièces à fournir", "Contacts"] as const;

export default function DemarcheDetail({ d }: { d: Demarche }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Vue d'ensemble");
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [dl, setDl] = useState(false);
  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done / d.pieces.length) * 100);

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px]">
      <div>
        <div className="flex flex-wrap items-center gap-2"><span className="badge">{d.categorie}</span><span className="inline-flex items-center gap-1 rounded-md bg-[#E6F8EE] px-2 py-0.5 text-xs font-semibold text-ok"><BadgeCheck size={13} /> Information officielle</span></div>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{d.titre}</h1>
        <p className="mt-2 text-ink-soft">{d.etablissement} · {d.verifiee}</p>

        <div role="tablist" className="mt-8 flex gap-1 overflow-x-auto border-b border-line">
          {TABS.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={`-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${tab === t ? "border-campus text-campus" : "border-transparent text-ink-soft hover:text-ink"}`}>{t}</button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-white p-6 shadow-soft">
          {tab === "Vue d'ensemble" && (
            <dl className="space-y-5 text-sm">
              <div className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-campus" size={18} /><div><dt className="font-bold">Où effectuer la démarche ?</dt><dd className="text-ink-soft">{d.ou}</dd></div></div>
              <div className="flex gap-3"><Clock className="mt-0.5 shrink-0 text-campus" size={18} /><div><dt className="font-bold">Délais</dt><dd className="text-ink-soft">{d.delais}</dd></div></div>
              <div className="flex gap-3"><Wallet className="mt-0.5 shrink-0 text-campus" size={18} /><div><dt className="font-bold">Frais</dt><dd className="text-ink-soft">{d.frais}</dd></div></div>
              <div className="flex gap-3"><ListOrdered className="mt-0.5 shrink-0 text-campus" size={18} /><div><dt className="font-bold">Résumé</dt><dd className="text-ink-soft">{d.etapes.length} étapes et {d.pieces.length} pièces à préparer.</dd></div></div>
            </dl>
          )}
          {tab === "Étapes" && (
            <ol className="space-y-4">
              {d.etapes.map((e, i) => (
                <li key={e} className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-campus text-sm font-bold text-white">{i + 1}</span><p className="pt-1 text-sm">{e}</p></li>
              ))}
            </ol>
          )}
          {tab === "Pièces à fournir" && (
            <div>
              <div className="flex items-center justify-between text-sm"><span className="flex items-center gap-2 font-bold"><Files size={18} className="text-campus" /> Ma liste de contrôle</span><span className="font-semibold text-campus">{done}/{d.pieces.length}</span></div>
              <div className="mt-3 h-2 rounded-full bg-line" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><div className="h-full rounded-full bg-campus transition-all" style={{ width: `${pct}%` }} /></div>
              <ul className="mt-5 space-y-2">
                {d.pieces.map((p, i) => (
                  <li key={p}>
                    <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition-colors ${checked[i] ? "border-ok/40 bg-[#E6F8EE]" : "border-line hover:border-campus"}`}>
                      <input type="checkbox" className="h-4 w-4 accent-[#0A66F5]" checked={!!checked[i]} onChange={() => setChecked((c) => ({ ...c, [i]: !c[i] }))} />
                      <span className={checked[i] ? "text-ink-soft line-through" : ""}>{p}</span>
                    </label>
                  </li>
                ))}
              </ul>
              {pct === 100 && <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-ok"><CheckCircle2 size={18} /> Dossier prêt : tu peux te rendre sur place.</p>}
            </div>
          )}
          {tab === "Contacts" && (
            <div className="flex gap-3 text-sm"><Phone className="mt-0.5 shrink-0 text-campus" size={18} /><div><p className="font-bold">À contacter</p><p className="text-ink-soft">{d.contact}</p><p className="mt-2 text-xs text-ink-soft">Coordonnées exactes fictives dans ce prototype.</p></div></div>
          )}
        </div>

        <div className="mt-6 flex gap-3 rounded-2xl bg-[#FFF6E0] p-5 text-sm text-[#7A4F00]">
          <AlertTriangle className="mt-0.5 shrink-0" size={18} />
          <p><span className="font-bold">À noter.</span> Cette fiche est mise à jour régulièrement. Si tu constates une information obsolète, signale-le et vérifie toujours auprès de l&apos;établissement.</p>
        </div>
      </div>

      <aside className="h-fit rounded-2xl border border-line bg-white p-6 shadow-soft lg:sticky lg:top-24">
        <p className="font-display text-lg font-extrabold">Besoin de la fiche ?</p>
        <p className="mt-1 text-sm text-ink-soft">Télécharge-la pour la consulter hors connexion.</p>
        <button onClick={() => setDl(true)} className="btn-primary mt-4 w-full"><Download size={16} /> Télécharger la fiche (PDF)</button>
      </aside>

      <Modal open={dl} onClose={() => setDl(false)} titre="Téléchargement simulé">
        <p className="text-sm text-ink-soft">Dans ce prototype, aucun fichier n&apos;est généré. Dans la version réelle, tu recevrais ici la fiche PDF de cette démarche.</p>
        <button onClick={() => setDl(false)} className="btn-primary mt-5 w-full">Compris</button>
      </Modal>
    </div>
  );
}
