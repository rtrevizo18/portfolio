const videoSrc = 'https://cdn.pixabay.com/video/2016/02/29/2299-157183618_large.mp4'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
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

      <section className="relative flex min-h-screen items-end px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
        <div className="max-w-4xl">
          <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.55em] text-white/70 sm:text-[0.75rem]">
            Downtown transit / monochrome field
          </p>

          <h1 className="font-title text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-[0.08em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
            SUBWAY
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
            A stark black and white splash page with a moving subway station behind the frame.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-white/60 sm:text-[0.7rem]">
            <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">Autoplay</span>
            <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">Muted loop</span>
            <span className="rounded-full border border-white/20 px-4 py-2 backdrop-blur-sm">Grayscale</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
