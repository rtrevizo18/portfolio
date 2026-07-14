import type { ComponentType, SVGProps } from "react";

type BadgeIconProps = {
  label: string;
  color: string;
  isHovered: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function BadgeIcon({ label, color, isHovered, Icon }: BadgeIconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="rounded-full border border-white/20 bg-black/80 p-4"
        style={{ borderColor: color }}
      >
        <Icon
          aria-hidden="true"
          focusable="false"
          className="h-12 w-12 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
          style={{ color }}
        />
      </div>
      <span
        className={`text-[0.62rem] font-semibold uppercase tracking-[0.35em] text-white/65 transition-all duration-200 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
      >
        {label}
      </span>
    </div>
  );
}

export default BadgeIcon;