import type { ComponentType, KeyboardEvent, ReactNode, SVGProps } from "react";
import { useEffect, useState } from "react";
import BadgeIcon from "./BadgeIcon";

type ExperienceMediaSide = "left" | "right";

type ExperienceFooterBadge = {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type ExperienceCardProps = {
  title: string;
  date: string;
  roles: string[];
  description: string;
  logo: ComponentType<{ color: string; width?: number; height?: number }>;
  color: string;
  logoWidth?: number;
  logoHeight?: number;
  footerBadgeIcons?: ExperienceFooterBadge[];
  mediaSide?: ExperienceMediaSide;
  media: ReactNode;
};

function ExperienceCard({
  title,
  date,
  roles,
  description,
  logo: Logo,
  color,
  logoWidth,
  logoHeight,
  footerBadgeIcons = [],
  mediaSide = "right",
  media,
}: ExperienceCardProps) {
  const renderedLogoWidth = logoWidth ?? 144;
  const renderedLogoHeight = logoHeight ?? 34;
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredFooterBadge, setHoveredFooterBadge] = useState<string | null>(
    null,
  );

  const isExpanded = isPinnedOpen || isHovered;

  useEffect(() => {
    if (!isExpanded) {
      setIsPinnedOpen(false);
    }
  }, [isExpanded]);

  const handleToggleOpen = () => {
    setIsPinnedOpen((current) => !current);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggleOpen();
    }

    if (event.key === "Escape") {
      setIsPinnedOpen(false);
    }
  };

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 px-6 sm:px-10 lg:px-14">
      <article
        role="button"
        tabIndex={0}
        aria-pressed={isExpanded}
        aria-label={`${title} experience card`}
        onClick={handleToggleOpen}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setIsHovered(false);
          }
        }}
        className={`group/card mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl border-2 border-white/45 bg-white/3 p-6 text-left outline-none transition-[max-width,transform,border-color,background-color,box-shadow] duration-700 ease-out sm:p-8 lg:items-stretch lg:gap-8 ${
          mediaSide === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
        } ${isExpanded ? "border-white/65 bg-white/6 shadow-[0_28px_70px_rgba(0,0,0,0.38)]" : ""}`}
      >
        <div className="max-w-3xl flex-1">
          <div className="flex flex-col items-start gap-2">
            <h2 className="font-subway text-[clamp(2rem,5vw,3.6rem)] font-black leading-[0.92] tracking-[0.06em] text-white">
              {title}
            </h2>
            <p className="text-[0.96rem] font-semibold uppercase tracking-[0.24em] text-white/58 sm:text-[1rem]">
              {date}
            </p>
          </div>
          <div
            className="mt-4 flex flex-wrap items-center gap-3 text-xl font-semibold uppercase tracking-[0.2em]"
            style={{ color }}
          >
            {roles.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                {index > 0 ? <span className="text-white/30">/</span> : null}
                <span>{role}</span>
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-[1.12rem] leading-8 text-white/72 sm:text-[1.16rem]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-start gap-4">
            {footerBadgeIcons.map(({ label, Icon }) => (
              <div
                key={label}
                onMouseEnter={() => setHoveredFooterBadge(label)}
                onMouseLeave={() => setHoveredFooterBadge(null)}
              >
                <BadgeIcon
                  label={label}
                  Icon={Icon}
                  color={color}
                  isHovered={hoveredFooterBadge === label}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative min-h-60 overflow-hidden rounded-4xl border border-white/12 bg-black/50 transition-[width,min-height,opacity,transform] duration-700 ease-out lg:flex-none ${
            mediaSide === "left" ? "lg:mr-auto" : isExpanded ? "" : "lg:ml-auto"
          } ${isExpanded ? "lg:w-[min(42vw,36rem)]" : "lg:w-50"}`}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${
              isExpanded ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className="flex items-center justify-center rounded-3xl p-3 transition-transform duration-500 group-hover/card:scale-[0.98]"
              style={{ width: renderedLogoWidth, height: renderedLogoHeight }}
            >
              <Logo
                color={color}
                width={renderedLogoWidth}
                height={renderedLogoHeight}
              />
            </div>
          </div>

          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            {media}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ExperienceCard;
