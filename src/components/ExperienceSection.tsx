import cougarCsLogo from "../assets/CougarCS.svg";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="max-w-5xl">
        <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-[#C80F2E]/80 sm:text-[0.75rem]">
          Experience
        </p>
        <div className="flex flex-col gap-8 rounded-2xl border border-[#C80F2E]/20 bg-white/2 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-title text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.92] tracking-[0.04em] text-white">
              CougarCS
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#C80F2E]">
              <span>Corporate Relations Officer</span>
              <span className="text-white/30">/</span>
              <span>Web Dev Member</span>
            </div>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Worked with the CougarCS team on outreach and web development efforts, helping keep
              the organization&apos;s online presence clear, functional, and up to date.
            </p>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="w-full max-w-36 rounded-2xl border border-[#C80F2E]/25 bg-white/5 p-4">
              <img
                className="h-full w-full object-contain"
                src={cougarCsLogo}
                alt="CougarCS logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;