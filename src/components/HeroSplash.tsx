const videoSrc =
  "https://cdn.pixabay.com/video/2016/02/29/2299-157183618_large.mp4";

function HeroSplash() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 brightness-50"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative flex min-h-screen items-end px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-white/70 sm:text-base">
            Leaving Houston Line...
          </p>

          <h1 className="font-title text-[clamp(3.4rem,12vw,10rem)] leading-[0.9] tracking-[0.06em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
            RICARDO
            <br />
            TREVIZO
          </h1>

          <div className="mt-8 flex flex-wrap gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-[0.84rem] md:text-[0.98rem]">
            <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">
              Web Developer
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">
              Backend Engineer
            </span>
            <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">
              Game Designer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSplash;
