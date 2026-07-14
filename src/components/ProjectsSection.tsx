import portraitSrc from "../assets/Ricardo_Trevizo_Image.png";
import { CogBadgeIcon, PluginBadgeIcon, ReactBadgeIcon } from "./BadgeIcons";
import BadgeIcon from "./BadgeIcon";

import { useState } from "react";

import type { ComponentType, SVGProps } from "react";

type Project = {
  title: string;
  date: string;
  summary: string;
  accent: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  badges: Array<{
    label: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
  }>;
};

const projects: Project[] = [
  {
    title: "Portfolio Site",
    date: "July 2025",
    summary:
      "A responsive personal site built to present my work, experience, and contact details with a clean editorial feel.",
    accent: "#1E5AA8",
    imageSrc: portraitSrc,
    imageAlt: "Portrait preview for Portfolio Site",
    href: "https://github.com",
    badges: [
      { label: "React", Icon: ReactBadgeIcon },
      { label: "TypeScript", Icon: PluginBadgeIcon },
      { label: "Vite", Icon: CogBadgeIcon },
    ],
  },
  {
    title: "Game Concept",
    date: "July 2025",
    summary:
      "A small interactive project exploring movement, visuals, and feel with a focus on simple, intentional mechanics.",
    accent: "#FD5108",
    imageSrc: portraitSrc,
    imageAlt: "Portrait preview for Game Concept",
    href: "https://github.com",
    badges: [
      { label: "Gameplay", Icon: CogBadgeIcon },
      { label: "UI", Icon: ReactBadgeIcon },
      { label: "bruh", Icon: PluginBadgeIcon },
    ],
  },
];

function ProjectsSection() {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

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
            className="group flex h-full flex-col rounded-3xl border border-white/12 bg-white/4 p-4 text-left shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-5"
          >
            <div className="flex items-start gap-4">
              <div
                className="self-center h-30 w-30 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-28 sm:w-28"
                style={{ boxShadow: `0 0 0 1px ${project.accent}22 inset` }}
              >
                <img
                  className="h-full w-full object-cover object-center"
                  src={project.imageSrc}
                  alt={project.imageAlt}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div
                  className="h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <div className="mt-4 flex flex-col items-start gap-2">
                  <h3 className="font-subway text-[clamp(1.5rem,3vw,2.2rem)] font-black leading-[0.95] tracking-wider text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/58 sm:text-[0.85rem]">
                    {project.date}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70 sm:text-[0.95rem]">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-8 pb-4">
                {project.badges.map(({ label, Icon }) => (
                  <div
                    key={label}
                    onMouseEnter={() => setHoveredBadge(label)}
                    onMouseLeave={() => setHoveredBadge(null)}
                  >
                    <BadgeIcon
                      label={label}
                      Icon={Icon}
                      color={project.accent}
                      isHovered={hoveredBadge === label}
                      size="sm"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-2 flex justify-end gap-4">
                <a
                  className="inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-white"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-white"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
