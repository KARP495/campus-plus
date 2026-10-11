import { Star } from "lucide-react";
import type { ReactNode } from "react";

export function Stars({ note, avis }: { note: number; avis?: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-ink-soft">
      <Star size={13} className="fill-warn text-warn" />
      <span className="font-semibold text-ink">{note.toFixed(1)}</span>
      {avis !== undefined && <span>({avis} avis)</span>}
    </span>
  );
}

export function Avatar({ initiales, size = 36 }: { initiales: string; size?: number }) {
  return (
    <span style={{ width: size, height: size, fontSize: size * 0.38 }} className="grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-campus to-campus-dark font-display font-bold text-white">
      {initiales}
    </span>
  );
}

export function PageHeader({ titre, texte, children }: { titre: string; texte: string; children?: ReactNode }) {
  return (
    <section className="border-b border-line bg-gradient-to-b from-campus-light/70 to-paper">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 md:pt-14">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{titre}</h1>
        <p className="mt-2 max-w-2xl text-ink-soft">{texte}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

export function Crumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-ink-soft sm:px-6">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? <a href={it.href} className="hover:text-campus">{it.label}</a> : <span className="text-ink">{it.label}</span>}
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}

export function Modal({ open, onClose, titre, children }: { open: boolean; onClose: () => void; titre: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-ink/50 p-0 backdrop-blur-sm sm:place-items-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={titre}>
      <div className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-lift sm:rounded-3xl" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-extrabold">{titre}</h2>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}
