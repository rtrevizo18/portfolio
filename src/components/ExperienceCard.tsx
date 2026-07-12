import type { ComponentType } from "react";

type ExperienceCardProps = {
  title: string;
  roles: string[];
  description: string;
  logo: ComponentType<{ color: string; width?: number; height?: number }>;
  color: string;
  logoWidth?: number;
  logoHeight?: number;
  footerIconLetters?: string[];
};

function ExperienceCard({
  title,
  roles,
  description,
  logo: Logo,
  color,
  logoWidth,
  logoHeight,
  footerIconLetters = ["A", "B", "C", "G", "L"],
}: ExperienceCardProps) {
  const renderedLogoWidth = logoWidth ?? 144;
  const renderedLogoHeight = logoHeight ?? 34;

  return (
    <div className="group">
      <article className="flex flex-col gap-6 rounded-3xl border-2 border-white/50 bg-white/2 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-subway text-[clamp(2.2rem,5.5vw,4.2rem)] font-black leading-[0.9] tracking-wider text-white">
            {title}
          </h2>
          <div
            className="mt-4 flex flex-wrap items-center gap-3 text-md font-semibold uppercase tracking-[0.28em]"
            style={{ color }}
          >
            {roles.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                {index > 0 ? <span className="text-white/30">/</span> : null}
                <span>{role}</span>
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            {footerIconLetters.map((letter) => (
              <span
                key={letter}
                style={{ borderColor: color, color }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C80F2E]/35 bg-black text-[2rem] font-semibold uppercase tracking-[0.2em] text-[#C80F2E]"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        <div className="mr-6 flex items-center justify-center">
          <div
            className="flex items-center justify-center rounded-3xl p-3"
            style={{ width: renderedLogoWidth, height: renderedLogoHeight }}
          >
            <Logo color={color} width={renderedLogoWidth} height={renderedLogoHeight} />
          </div>
        </div>
      </article>
    </div>
  );
}

export default ExperienceCard;