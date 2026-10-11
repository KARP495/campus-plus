import Link from "next/link";
import { Compass, FileText, Sparkles, Briefcase, ArrowRight, CheckCircle2, MapPin, Users, Search, Lightbulb, Rocket, BadgeCheck } from "lucide-react";
import HeroSearch from "@/components/HeroSearch";
import CoverArt from "@/components/CoverArt";
import { Avatar } from "@/components/ui";
import { actualites } from "@/lib/data";

function WaxBackdrop() {
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600">
      <defs>
        <pattern id="wax" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#fff" strokeOpacity=".09" strokeWidth="1.5">
            <circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="38" /><circle cx="60" cy="60" r="24" /><circle cx="60" cy="60" r="10" />
            <path d="M0 0 120 120M120 0 0 120" strokeOpacity=".05" />
          </g>
        </pattern>
        <radialGradient id="glow" cx="80%" cy="20%" r="60%"><stop offset="0" stopColor="#3B8BFF" stopOpacity=".55" /><stop offset="1" stopColor="#3B8BFF" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#wax)" />
      <rect width="800" height="600" fill="url(#glow)" />
    </svg>
  );
}

function HeroStack() {
  return (
    <div className="relative mx-auto hidden h-[440px] w-full max-w-md lg:block" aria-hidden="true">
      <div className="deal absolute left-0 top-2 w-72 rounded-2xl bg-white p-4 text-ink shadow-lift" style={{ ["--r" as string]: "-4deg", ["--r0" as string]: "-8deg", animationDelay: ".15s" }}>
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-campus-light text-campus"><Compass size={20} /></span>
          <div><p className="text-sm font-bold">Licence en Informatique</p><p className="text-xs text-ink-soft">UAC · 3 ans · Bac C, D, E</p></div>
        </div>
        <div className="mt-3 flex gap-1.5"><span className="badge">Licence</span><span className="badge">Informatique</span></div>
      </div>

      <div className="deal absolute right-0 top-32 w-72 rounded-2xl bg-white p-4 text-ink shadow-lift" style={{ ["--r" as string]: "3deg", ["--r0" as string]: "7deg", animationDelay: ".35s" }}>
        <p className="flex items-center gap-2 text-sm font-bold"><BadgeCheck size={16} className="text-ok" /> Inscription à l&apos;UAC</p>
        <ul className="mt-3 space-y-2 text-xs text-ink-soft">
          <li className="flex items-center gap-2"><CheckCircle2 size={15} className="text-ok" /> Compte créé</li>
          <li className="flex items-center gap-2"><CheckCircle2 size={15} className="text-ok" /> Pièces déposées</li>
          <li className="flex items-center gap-2"><span className="h-[15px] w-[15px] rounded-full border-2 border-line" /> Frais à régler</li>
        </ul>
        <div className="mt-3 h-1.5 rounded-full bg-line"><div className="h-full w-2/3 rounded-full bg-campus" /></div>
      </div>

      <div className="deal absolute bottom-0 left-8 w-72 overflow-hidden rounded-2xl bg-white text-ink shadow-lift" style={{ ["--r" as string]: "-2deg", ["--r0" as string]: "-6deg", animationDelay: ".55s" }}>
        <CoverArt seed={1} tone="blue" className="h-20 w-full" />
        <div className="flex items-center gap-3 p-4">
          <Avatar initiales="AH" />
          <div className="min-w-0"><p className="truncate text-sm font-bold">Affiches, logos, bannières</p><p className="text-xs text-ink-soft">5 000 FCFA / visuel</p></div>
        </div>
      </div>
    </div>
  );
}

const PARCOURS = [
  { icon: Search, titre: "Découvrir", texte: "Elle cherche une formation et compare les parcours." },
  { icon: Lightbulb, titre: "Comprendre", texte: "Elle lit la fiche et vérifie la source officielle." },
  { icon: Rocket, titre: "Agir", texte: "Elle propose un service ou répond à une offre." },
  { icon: Users, titre: "Progresser", texte: "Elle développe son portfolio et son expérience." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-campus via-campus-dark to-ink text-white">
        <WaxBackdrop />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
          <div className="min-w-0">
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Ton parcours universitaire, plus simple avec Campus+
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/80">
              Informations, accompagnement, services et opportunités. Tout ce dont tu as besoin, au même endroit.
            </p>
            <div className="mt-8"><HeroSearch /></div>
          </div>
          <HeroStack />
        </div>
      </section>

      {/* LES 4 PÔLES */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-xl text-3xl font-extrabold sm:text-4xl">Quatre portes d&apos;entrée, un seul parcours</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-12">
          <Link href="/orientation" className="group relative overflow-hidden rounded-xl3 bg-campus p-8 text-white shadow-lift md:col-span-7 md:row-span-1">
            <CoverArt seed={4} tone="blue" className="absolute -right-10 -top-6 h-64 w-72 rotate-6 opacity-30" />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Compass /></span>
            <h3 className="relative mt-16 text-2xl font-extrabold">Orientation et formations</h3>
            <p className="relative mt-2 max-w-sm text-white/80">Compare les filières, les établissements et les débouchés avant de choisir.</p>
            <span className="relative mt-6 inline-flex items-center gap-2 font-semibold">Explorer <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></span>
          </Link>

          <Link href="/demarches" className="group rounded-xl3 border border-line bg-white p-8 shadow-soft md:col-span-5">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-campus-light text-campus"><FileText /></span>
            <h3 className="mt-6 text-xl font-extrabold">Démarches administratives</h3>
            <p className="mt-2 text-ink-soft">Étapes, pièces à fournir, délais et frais, avec la source et la date de vérification.</p>
            <ul className="mt-5 space-y-2 text-sm">
              {["Inscription", "Bourse", "Carte d'étudiant"].map((x) => (<li key={x} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-ok" />{x}</li>))}
            </ul>
          </Link>

          <Link href="/services" className="group rounded-xl3 bg-[#E6F8EE] p-8 md:col-span-5">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ok text-white"><Sparkles /></span>
            <h3 className="mt-6 text-xl font-extrabold">Services étudiants</h3>
            <p className="mt-2 text-ink-soft">Trouve un étudiant pour une affiche, un cours ou un dépannage. Propose aussi tes talents.</p>
            <div className="mt-5 flex -space-x-2">{["AH", "IB", "MT", "KA"].map((i) => (<span key={i} className="rounded-full ring-2 ring-[#E6F8EE]"><Avatar initiales={i} size={34} /></span>))}</div>
          </Link>

          <Link href="/stages" className="group relative overflow-hidden rounded-xl3 bg-ink p-8 text-white md:col-span-7">
            <CoverArt seed={9} tone="night" className="absolute -bottom-10 -right-8 h-56 w-72 -rotate-6 opacity-50" />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-alert text-white"><Briefcase /></span>
            <h3 className="relative mt-10 text-2xl font-extrabold">Stages et opportunités</h3>
            <p className="relative mt-2 max-w-sm text-white/75">Des offres claires, avec missions, durée et conditions. Postule en quelques clics.</p>
            <span className="relative mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold"><MapPin size={14} /> Cotonou · 3 mois · 50 000 FCFA / mois</span>
          </Link>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-xl text-3xl font-extrabold sm:text-4xl">De l&apos;information à l&apos;expérience</h2>
          <p className="mt-3 max-w-xl text-ink-soft">Exemple du parcours d&apos;une étudiante avec Campus+.</p>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div className="absolute left-6 right-6 top-6 hidden h-0.5 bg-gradient-to-r from-campus via-campus/40 to-campus/10 md:block" aria-hidden="true" />
            {PARCOURS.map((p, i) => (
              <li key={p.titre} className="relative">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-campus text-white shadow-lift"><p.icon size={20} /></span>
                <h3 className="mt-4 text-lg font-extrabold">{i + 1}. {p.titre}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Actualités et conseils</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {actualites.map((a) => (
            <article key={a.titre} className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              <CoverArt seed={a.seed} className="h-36 w-full" />
              <div className="p-5">
                <h3 className="text-lg font-extrabold leading-snug">{a.titre}</h3>
                <p className="mt-1 text-sm text-ink-soft">{a.resume}</p>
                <p className="mt-4 text-xs text-ink-soft">{a.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DOUBLE CTA */}
      <section className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-2">
        <div className="rounded-xl3 bg-campus-light p-8">
          <h3 className="text-2xl font-extrabold">Tu as un talent à proposer ?</h3>
          <p className="mt-2 text-ink-soft">Crée ton profil, montre tes réalisations et fixe tes tarifs.</p>
          <Link href="/profil" className="btn-primary mt-6">Créer mon profil</Link>
        </div>
        <div className="rounded-xl3 bg-ink p-8 text-white">
          <h3 className="text-2xl font-extrabold">Tu représentes une organisation ?</h3>
          <p className="mt-2 text-white/75">Publie une offre de stage ou une mission et découvre des profils motivés.</p>
          <Link href="/stages" className="btn mt-6 bg-white text-ink hover:bg-campus-light">Voir les offres</Link>
        </div>
      </section>
    </>
  );
}
