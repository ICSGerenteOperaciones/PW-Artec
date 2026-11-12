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
        className="h-12 w-auto shrink-0 drop-shadow-[0_0_3px_var(--background)]"
      />
      <span className="font-display text-3xl font-extrabold leading-none tracking-tight text-[var(--text-primary)]">
        ARTEC
      </span>
    </span>
  );
}
