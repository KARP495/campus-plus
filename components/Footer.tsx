import Link from "next/link";
import Logo from "./Logo";
import { Info } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink pb-28 pt-14 text-white md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Information universitaire, entraide, services étudiants et stages réunis dans un même espace.
          </p>
          <p className="mt-6 font-display text-lg font-bold">Ensemble vers ton avenir.</p>
        </div>
        <div>
          <p className="font-display text-sm font-bold">Explorer</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link href="/orientation" className="hover:text-white">Orientation et formations</Link></li>
            <li><Link href="/demarches" className="hover:text-white">Démarches administratives</Link></li>
            <li><Link href="/services" className="hover:text-white">Services étudiants</Link></li>
            <li><Link href="/stages" className="hover:text-white">Stages et emplois</Link></li>
            <li><Link href="/communaute" className="hover:text-white">Communauté</Link></li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-white/75">
          <p className="flex items-center gap-2 font-display font-bold text-white"><Info size={16} /> À propos de ce prototype</p>
          <p className="mt-2">Maquette interactive avec des données fictives : pas de compte réel, de paiement ni de candidature envoyée. Les fiches ne remplacent jamais les consignes officielles.</p>
        </div>
      </div>
    </footer>
  );
}
