import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-halo inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/artec-mark.png"
        alt=""
        width={433}
        height={410}
        priority
        className="h-11 w-auto shrink-0 drop-shadow-[0_0_3px_var(--background)]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">
          ARTEC
        </span>
        <span className="mt-1 font-display text-[0.8rem] font-bold tracking-[0.32em] text-[var(--accent)]">
          S.A.S.
        </span>
      </span>
    </span>
  );
}
