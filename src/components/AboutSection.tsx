import houstonSrc from "../assets/Houston_Image.png";
import portraitSrc from "../assets/Ricardo_Trevizo_Image.png";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          className="h-full w-full scale-[1.12] object-cover object-center opacity-25"
          src={houstonSrc}
          alt="Houston highways map"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_58%)]" />
        <div className="absolute inset-0 bg-[#060606]/65" />
      </div>
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-around lg:gap-16">
        <div className="order-2 max-w-4xl lg:order-1">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-white/80 sm:text-[0.75rem]">
            About
          </p>
          <h2 className="max-w-3xl font-title uppercase text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-[0.04em] text-white">
            Creating Solutions
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            I&apos;m a software developer based in Houston, Texas. Experienced
            in building full-stack web applications, video games, and developer
            tools, my job in software is to make everyone elses&apos; a little
            bit easier. With strong attention to detail and eye for design,
            I&apos;ve curated my collaborative and technical skills to be as
            intentional as possible.
          </p>
        </div>
        <div className="relative order-1 w-full max-w-[18rem] self-center overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:order-2 lg:max-w-md xl:max-w-120">
          <img
            className="h-full w-full object-cover object-center"
            src={portraitSrc}
            alt="Portrait of Ricardo Trevizo"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
