import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Campus+ — accueil">
      <span className={`grid h-9 w-9 place-items-center rounded-xl ${light ? "bg-white text-campus" : "bg-campus text-white"}`}>
        <GraduationCap size={20} strokeWidth={2.2} />
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Campus<span className={light ? "text-[#8FB9FF]" : "text-campus"}>+</span>
      </span>
    </Link>
  );
}
