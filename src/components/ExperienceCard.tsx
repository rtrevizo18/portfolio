type ExperienceCardProps = {
  title: string;
  roles: string[];
  description: string;
  logoSrc: string;
  logoAlt: string;
  galleryImages: Array<{ src: string; alt: string }>;
  footerIconLetters?: string[];
};

function ExperienceCard({
  title,
  roles,
  description,
  logoSrc,
  logoAlt,
  galleryImages,
  footerIconLetters = ["A", "B", "C", "G", "L"],
}: ExperienceCardProps) {
  return (
    <div className="group">
      <article className="flex flex-col gap-6 rounded-3xl border-2 border-white/50 bg-white/2 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="font-subway text-[clamp(2.2rem,5.5vw,4.2rem)] font-black leading-[0.9] tracking-wider text-white">
            {title}
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#C80F2E]">
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
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C80F2E]/35 bg-black text-[2rem] font-semibold uppercase tracking-[0.2em] text-[#C80F2E]"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-start lg:justify-end">
          <div className="w-full max-w-36 overflow-hidden rounded-3xl p-3">
            <img className="h-full w-full object-contain" src={logoSrc} alt={logoAlt} />
          </div>
        </div>
      </article>

      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:mt-4 group-hover:max-h-64 group-hover:opacity-100">
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="min-w-[16rem] snap-start overflow-hidden rounded-2xl border border-[#C80F2E]/20 bg-black"
            >
              <img className="h-40 w-full object-cover" src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;