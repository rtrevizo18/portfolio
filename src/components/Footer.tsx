function Footer() {
  return (
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
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
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
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                <path d="M12 .5C5.65.5.5 5.72.5 12.17c0 5.16 3.29 9.54 7.86 11.1.58.11.79-.26.79-.58 0-.29-.01-1.07-.02-2.1-3.2.71-3.88-1.58-3.88-1.58-.52-1.36-1.27-1.72-1.27-1.72-1.04-.73.08-.72.08-.72 1.15.08 1.76 1.21 1.76 1.21 1.02 1.78 2.68 1.27 3.34.97.1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.31-5.23-5.85 0-1.29.45-2.34 1.19-3.17-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.21a10.66 10.66 0 0 1 2.9-.4c.99 0 1.98.14 2.9.4 2.2-1.53 3.17-1.21 3.17-1.21.63 1.64.23 2.86.11 3.16.74.83 1.18 1.88 1.18 3.17 0 4.55-2.69 5.55-5.25 5.84.41.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .32.21.69.8.58 4.57-1.56 7.86-5.94 7.86-11.1C23.5 5.72 18.35.5 12 .5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;