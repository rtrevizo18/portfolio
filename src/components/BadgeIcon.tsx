import type { ComponentType, SVGProps } from "react";

type BadgeIconProps = {
  label: string;
  color: string;
  isHovered: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  size?: "md" | "sm";
};

function BadgeIcon({
  label,
  color,
  isHovered,
  Icon,
  size = "md",
}: BadgeIconProps) {
  const isCompact = size === "sm";
  const labelLength = label.length;
  const labelTextClassName =
    labelLength > 14
      ? "text-[0.62rem] tracking-[0.18em] max-w-[6.5rem]"
      : labelLength > 10
        ? "text-[0.68rem] tracking-[0.24em] max-w-[7.5rem]"
        : "text-[0.72rem] tracking-[0.3em] max-w-[8.5rem]";

  return (
    <div
      className={`${isCompact ? "relative flex h-10 w-10 items-center justify-center" : "flex flex-col items-center gap-2"}`}
    >
      <div
        className={`rounded-full border border-white/20 bg-black/80 ${isCompact ? "p-2.5" : "p-4"}`}
        style={{ borderColor: color }}
      >
        <Icon
          aria-hidden="true"
          focusable="false"
          className={`drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] ${isCompact ? "h-7 w-7" : "h-12 w-12"}`}
          style={{ color }}
        />
      </div>
      {isCompact ? (
        <span
          className={`pointer-events-none absolute left-1/2 top-full mt-1 w-max -translate-x-1/2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/65 transition-all duration-200 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
        >
          {label}
        </span>
      ) : (
        <span
          className={`${labelTextClassName} text-center font-semibold uppercase leading-tight text-white/65 transition-all duration-200 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export default BadgeIcon;
