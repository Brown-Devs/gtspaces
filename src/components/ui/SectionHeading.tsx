import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", light && "text-gold-300")}>{eyebrow}</span>
      )}
      <h2
        className={cn(
          "mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-ink-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
