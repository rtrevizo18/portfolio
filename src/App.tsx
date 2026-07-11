import portraitSrc from "./assets/Ricardo_Trevizo_Image.png";

const videoSrc =
  "https://cdn.pixabay.com/video/2016/02/29/2299-157183618_large.mp4";

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
              Leaving Houston Line...
            </p>

            <h1 className="font-title text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-[0.08em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
              RICARDO
            </h1>

            <p className="mt-1 max-w-xl text-lg leading-7 text-white/78 sm:text-base sm:leading-8">
              Trevizo
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-[0.7rem] md:text-[1rem]">
              <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">
                Software Engineer
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">
                Game Developer
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">

              </span>
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
              <a
                className="transition-colors hover:text-white"
                href="#projects"
              >
                Projects
              </a>
              <a className="transition-colors hover:text-white" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <section
          id="about"
          className="flex min-h-[calc(100vh-4rem)] items-center px-6 py-16 sm:px-10 lg:px-14"
        >
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-around lg:gap-16">
            <div className="order-2 max-w-4xl lg:order-1">
              <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-white/55 sm:text-[0.75rem]">
                About
              </p>
              <h2 className="max-w-3xl font-title uppercase text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-[0.04em] text-white">
                Creating Solutions
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                I'm a software developer based in Houston, Texas. Experienced in building full-stack
                web applications, video games, and developer tools, my job in software is to make
                everyone elses' a little bit easier. With strong attention to detail and eye for
                design, I've curated my collaborative and technical skills to be as intentional as possible.
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

        <footer
          id="contact"
          className="px-6 py-10 text-xs uppercase tracking-[0.45em] text-white/35 sm:px-10 lg:px-14"
        >
          <div className="text-lg text-white/72">Get in Touch</div>
          <div className="mt-8 flex flex-col gap-4 text-[0.72rem] tracking-[0.3em] sm:flex-row sm:justify-around">
            <div className="space-y-3">
              <div>Email</div>
              <a
                className="block text-white/75 transition-colors hover:text-white"
                href="mailto:ricardotrevizo18@gmail.com"
              >
                ricardotrevizo18@gmail.com
              </a>
            </div>
            <div className="space-y-3">
              <div>Phone</div>
              <a
                className="block text-white/75 transition-colors hover:text-white"
                href="tel:+13468132836"
              >
                346-813-2836
              </a>
            </div>
            <div className="space-y-4">
              <div>Socials</div>
              <div className="flex items-center gap-3">
                <a
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/78 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                  href="https://www.linkedin.com/in/rtrevizo18"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.25 8h4.5v15H.25V8Zm7.36 0h4.31v2.05h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.95V23h-4.5v-7.32c0-1.75-.03-4-2.44-4-2.44 0-2.81 1.9-2.81 3.87V23H7.61V8Z" />
                  </svg>
                </a>
                <a
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/78 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                  href="https://github.com/rtrevizo18"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M12 .5C5.65.5.5 5.72.5 12.17c0 5.16 3.29 9.54 7.86 11.1.58.11.79-.26.79-.58 0-.29-.01-1.07-.02-2.1-3.2.71-3.88-1.58-3.88-1.58-.52-1.36-1.27-1.72-1.27-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.21 1.76 1.21 1.02 1.78 2.68 1.27 3.34.97.1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.31-5.23-5.85 0-1.29.45-2.34 1.19-3.17-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.21a10.66 10.66 0 0 1 2.9-.4c.99 0 1.98.14 2.9.4 2.2-1.53 3.17-1.21 3.17-1.21.63 1.64.23 2.86.11 3.16.74.83 1.18 1.88 1.18 3.17 0 4.55-2.69 5.55-5.25 5.84.41.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .32.21.69.8.58 4.57-1.56 7.86-5.94 7.86-11.1C23.5 5.72 18.35.5 12 .5Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default App;
