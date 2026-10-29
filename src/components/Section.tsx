import { cn } from "@/lib/utils";

type Tone = "white" | "paper" | "dark";

const TONES: Record<Tone, string> = {
  white: "bg-white text-ink",
  paper: "bg-paper text-ink",
  dark: "bg-navy-deep text-white",
};

/** Khung một mục trên trang: nền + khoảng cách + độ rộng thống nhất. */
export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", TONES[tone], className)}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}

/** Tiêu đề mục: canh trái, một cỡ chữ cho toàn site. */
export function SectionHeading({
  title,
  lead,
  tone = "light",
  className,
}: {
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("mb-10 md:mb-14 max-w-2xl", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold leading-tight", tone === "dark" ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-4 text-base md:text-lg leading-relaxed", tone === "dark" ? "text-slate-300" : "text-muted")}>
          {lead}
        </p>
      )}
    </div>
  );
}
