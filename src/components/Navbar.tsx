function Navbar() {
  return (
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
  );
}

export default Navbar;
