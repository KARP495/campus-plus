// Visuels génératifs inspirés des motifs wax : remplacent les photos dans le prototype.
type Props = { seed: number; className?: string; tone?: "blue" | "green" | "amber" | "rose" | "night" };

const TONES = {
  blue:  { bg: "#0A66F5", a: "#0848B8", b: "#8FB9FF", c: "#EAF2FE" },
  green: { bg: "#0E8F4A", a: "#0A6B38", b: "#8EE0B2", c: "#E6F8EE" },
  amber: { bg: "#F59E0B", a: "#C77D00", b: "#FFE19A", c: "#FFF6E0" },
  rose:  { bg: "#E5484D", a: "#B5282D", b: "#FFB4B6", c: "#FFEDEE" },
  night: { bg: "#0B1F3A", a: "#122B4F", b: "#4F7FD6", c: "#EAF2FE" },
} as const;

const ORDER = ["blue", "green", "amber", "rose", "night"] as const;

export default function CoverArt({ seed, className = "", tone }: Props) {
  const t = TONES[tone ?? ORDER[seed % ORDER.length]];
  const kind = seed % 4;
  const id = `ca-${seed}`;
  return (
    <svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width="160" height="120" fill={t.bg} />
      {kind === 0 && (
        <g fill="none" stroke={t.b} strokeWidth="3">
          {[10, 26, 42, 58, 74].map((r) => (<circle key={r} cx="130" cy="100" r={r} stroke={r % 20 === 10 ? t.b : t.a} />))}
          <circle cx="30" cy="22" r="14" fill={t.c} stroke="none" />
        </g>
      )}
      {kind === 1 && (
        <g>
          <defs><pattern id={id} width="32" height="32" patternUnits="userSpaceOnUse"><path d="M16 2 30 16 16 30 2 16Z" fill={t.a} /><circle cx="16" cy="16" r="4" fill={t.b} /></pattern></defs>
          <rect width="160" height="120" fill={`url(#${id})`} />
          <rect x="0" y="84" width="160" height="36" fill={t.c} opacity=".92" />
        </g>
      )}
      {kind === 2 && (
        <g>
          <path d="M0 90 Q40 40 80 80 T160 60 V120 H0Z" fill={t.a} />
          <path d="M0 105 Q50 70 90 100 T160 88 V120 H0Z" fill={t.b} />
          <circle cx="120" cy="30" r="16" fill={t.c} />
        </g>
      )}
      {kind === 3 && (
        <g>
          <defs><pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="20" height="10" fill={t.a} /><circle cx="10" cy="15" r="3" fill={t.b} /></pattern></defs>
          <rect width="160" height="120" fill={`url(#${id})`} />
          <circle cx="40" cy="80" r="26" fill={t.c} opacity=".95" />
        </g>
      )}
    </svg>
  );
}
