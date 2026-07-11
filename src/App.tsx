const videoSrc = 'https://cdn.pixabay.com/video/2016/02/29/2299-157183618_large.mp4'

function App() {
  return (
    <main className="bg-black text-white">
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
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-white/70 sm:text-[0.75rem]">
              Leaving Houston Line, Departing To...
            </p>

            <h1 className="font-title text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-[0.08em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
              RICARDO
            </h1>

            <p className="mt-1 max-w-xl text-lg leading-7 text-white/78 sm:text-base sm:leading-8">
              Trevizo
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-[0.7rem] md:text-[1rem]">
              <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">Software Engineer</span>
              <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">Game Developer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen border-t border-white/10 bg-[#050505]">
        <nav className="sticky top-0 z-20 border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md sm:px-10 lg:px-14">
          <div className="flex items-center justify-between gap-6 text-[0.68rem] font-semibold uppercase tracking-[0.45em] text-white/75 sm:text-[0.72rem]">
            <span className="text-white">Ricardo Trevizo</span>
            <div className="flex flex-wrap justify-end gap-4 sm:gap-6">
              <a className="transition-colors hover:text-white" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-white" href="#work">
                Work
              </a>
              <a className="transition-colors hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition-colors hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <article
          id="about"
          className="flex min-h-[calc(100vh-4rem)] items-center px-6 py-16 sm:px-10 lg:px-14"
        >
          <div className="max-w-4xl">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-white/55 sm:text-[0.75rem]">
              About
            </p>
            <h2 className="max-w-3xl font-title text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-[0.04em] text-white">
              ENGINEERING
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              bruh
            </p>
          </div>
        </article>

        <section id="work" className="px-6 pb-10 sm:px-10 lg:px-14">
        </section>

        <footer id="contact" className="px-6 py-10 text-xs uppercase tracking-[0.45em] text-white/35 sm:px-10 lg:px-14">
          I'm the foot guy
        </footer>
      </section>
    </main>
  )
}

export default App
