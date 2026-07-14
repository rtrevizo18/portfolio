type Project = {
  title: string;
  summary: string;
  tags: string[];
  accent: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Site",
    summary:
      "A responsive personal site built to present my work, experience, and contact details with a clean editorial feel.",
    tags: ["React", "TypeScript", "Vite"],
    accent: "#1E5AA8",
  },
  {
    title: "Game Concept",
    summary:
      "A small interactive project exploring movement, visuals, and feel with a focus on simple, intentional mechanics.",
    tags: ["Gameplay", "UI", "Prototyping"],
    accent: "#FD5108",
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="max-w-5xl">
        <p className="mb-8 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-white/80 sm:text-[0.75rem]">
          Projects
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col rounded-3xl border border-white/12 bg-white/4 p-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-6"
          >
            <div
              className="h-1.5 w-16 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            <h3 className="mt-5 font-subway text-[clamp(1.8rem,4vw,2.7rem)] font-black leading-[0.95] tracking-wider text-white">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/72"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
