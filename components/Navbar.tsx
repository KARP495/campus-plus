"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, FileText, Briefcase, Users, Sparkles, Search, Home } from "lucide-react";
import Logo from "./Logo";

export const NAV = [
  { href: "/orientation", label: "Orientation", icon: Compass },
  { href: "/demarches", label: "Démarches", icon: FileText },
  { href: "/services", label: "Services", icon: Sparkles },
  { href: "/stages", label: "Stages", icon: Briefcase },
  { href: "/communaute", label: "Communauté", icon: Users },
];

export default function Navbar() {
  const path = usePathname();
  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive(n.href) ? "bg-campus-light text-campus" : "text-ink-soft hover:text-ink"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/orientation" aria-label="Rechercher" className="grid h-10 w-10 place-items-center rounded-xl text-ink-soft hover:bg-campus-light hover:text-campus">
              <Search size={18} />
            </Link>
            <Link href="/profil" className="btn-ghost hidden sm:inline-flex">Se connecter</Link>
            <Link href="/profil" className="btn-primary">S&apos;inscrire</Link>
          </div>
        </div>
      </header>

      {/* Barre d'onglets mobile */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden" aria-label="Navigation mobile">
        <ul className="mx-auto grid max-w-md grid-cols-6">
          {[{ href: "/", label: "Accueil", icon: Home }, ...NAV].map((n) => {
            const active = n.href === "/" ? path === "/" : isActive(n.href);
            const Icon = n.icon;
            return (
              <li key={n.href}>
                <Link href={n.href} className={`flex flex-col items-center gap-0.5 py-2 text-[10px] font-semibold leading-tight ${active ? "text-campus" : "text-ink-soft"}`}>
                  <Icon size={20} strokeWidth={active ? 2.4 : 1.8} />
                  {n.label === "Communauté" ? "Forum" : n.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
