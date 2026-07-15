import { useState } from "react";
import type { ComponentType, SVGProps } from "react";

import cougarCSPortalSrc from "../assets/CougarCS_Portal.png";
import aiEmsSrc from "../assets/AI_EMS_Image.png";
import luminescenceSrc from "../assets/Luminescence_Image.png";
import newPlacesSrc from "../assets/NewPlaces_Image.png";
import portfolioSrc from "../assets/Portfolio_Image.png";
import pyinCppSrc from "../assets/PyinCPP_Image.png";
import tecpacsSrc from "../assets/Tecpacs_Image.png";
import uybSrc from "../assets/UYB_Image.png";
import volunterSrc from "../assets/Volunter_Image.png";
import zentraSrc from "../assets/Zentra_Image.png";

import BadgeIcon from "./BadgeIcon";
import {
  CSharpBadgeIcon,
  CogBadgeIcon,
  DockerBadgeIcon,
  ExpressBadgeIcon,
  FastAPIBadgeIcon,
  JavaScriptBadgeIcon,
  MongoDBBadgeIcon,
  PostgreSQLBadgeIcon,
  PythonBadgeIcon,
  PyTorchBadgeIcon,
  CppBadgeIcon,
  ReactTechBadgeIcon,
  SQLiteBadgeIcon,
  SumoBadgeIcon,
  TailwindBadgeIcon,
  TypeScriptBadgeIcon,
  UnityBadgeIcon,
  ViteBadgeIcon,
} from "./BadgeIcons";

type BadgeIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type ProjectBadge = {
  label: string;
  Icon: BadgeIconComponent;
};

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  date: string;
  summary: string;
  accent: string;
  monogram: string;
  imageSrc?: string;
  imageAlt?: string;
  badges: ProjectBadge[];
  links?: ProjectLink[];
};

const projects: Project[] = [
  {
    title: "CCS Recruitment Portal (WIP)",
    date: "Jul 2026 - Present",
    summary:
      "Building a talent-sourcing platform for CougarCS that streamlines recruiter access to student profiles through advanced filtering, searchable skill portfolios, and customizable candidate discovery searching.",
    accent: "#1E5AA8",
    monogram: "CS",
    imageSrc: cougarCSPortalSrc,
    imageAlt: "CougarCS Talent-Sourcing Portal preview",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "Express.js", Icon: ExpressBadgeIcon },
      { label: "PostgreSQL", Icon: PostgreSQLBadgeIcon },
    ],
    links: [],
  },
  {
    title: "Portfolio Website",
    date: "Jul 2026 - Present",
    summary:
      "Personal portfolio showcasing projects, experience, resume, and technical skills with a polished, accessible UI.",
    accent: "#FD5108",
    monogram: "PW",
    imageSrc: portfolioSrc,
    imageAlt: "Portfolio website preview",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "Vite", Icon: ViteBadgeIcon },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/rtrevizo18/portfolio" },
      { label: "Website", href: "https://ricardotrevizo.com" },
    ],
  },
  {
    title: "Luminescence",
    date: "Jan 2026 - May 2026",
    summary:
      "Action-adventure game built in Unity focusing on interactive gameplay mechanics, UI flow, and scene management.",
    accent: "#8B5CF6",
    monogram: "LM",
    imageSrc: luminescenceSrc,
    imageAlt: "Luminescence game preview",
    badges: [
      { label: "Unity", Icon: UnityBadgeIcon },
      { label: "C#", Icon: CSharpBadgeIcon },
      { label: "Unity UI", Icon: CogBadgeIcon },
    ],
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?v=_f2bUlMRQ0Q&feature=youtu.be",
      },
    ],
  },
  {
    title: "Volunter: Volunteering Platform",
    date: "Sept 2025 - Dec 2025",
    summary:
      "Platform connecting volunteers with organizations through location-aware opportunities, dashboards, and REST APIs.",
    accent: "#10B981",
    monogram: "VP",
    imageSrc: volunterSrc,
    imageAlt: "Volunter volunteering platform preview",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "FastAPI", Icon: FastAPIBadgeIcon },
      { label: "PostgreSQL", Icon: PostgreSQLBadgeIcon },
      { label: "Docker", Icon: DockerBadgeIcon },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/orgs/UHCOSC-4358-Group/repositories",
      },
      { label: "Live", href: "https://volunteer-website-39e.web.app/" },
    ],
  },
  {
    title: "EMS Vehicle Routing AI Pipeline",
    date: "Sept 2025 - Dec 2025",
    summary:
      "AI-driven emergency vehicle routing system that predicts traffic conditions and recommends optimal routes in Houston area.",
    accent: "#E11D48",
    monogram: "AE",
    imageSrc: aiEmsSrc,
    imageAlt: "EMS vehicle routing AI pipeline preview",
    badges: [
      { label: "Python", Icon: PythonBadgeIcon },
      { label: "PyTorch", Icon: PyTorchBadgeIcon },
      { label: "SUMO", Icon: SumoBadgeIcon },
      { label: "ML", Icon: CogBadgeIcon },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/COSC4368-Group-1/traffic-project",
      },
    ],
  },
  {
    title: "Zentra: AI Credit Card Analyzer",
    date: "Sept 2025",
    summary:
      "AI/finance web app created during HackRice that analyzes spending habits and recommends credit cards for maximum rewards and cashback.",
    accent: "#2563EB",
    monogram: "ZA",
    imageSrc: zentraSrc,
    imageAlt: "Zentra credit card analyzer preview",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "Python", Icon: PythonBadgeIcon },
      { label: "FastAPI", Icon: FastAPIBadgeIcon },
      { label: "MongoDB", Icon: MongoDBBadgeIcon },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/orgs/HackRice-Finance-Proj/repositories",
      },
      { label: "Live", href: "https://zentra-68f75.web.app/" },
    ],
  },
  {
    title: "Tecpacs: Package Manager",
    date: "Jul 2025",
    summary:
      "Lightweight package manager created during Data Hackfest that simplifies sharing and installing small software packages and code snippets.",
    accent: "#0F766E",
    monogram: "TP",
    imageSrc: tecpacsSrc,
    imageAlt: "Tecpacs package manager preview",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "Express.js", Icon: ExpressBadgeIcon },
      { label: "SQLite", Icon: SQLiteBadgeIcon },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/rtrevizo18/tecspacs" },
      { label: "Live", href: "https://frontend-nine-rosy-50.vercel.app/" },
    ],
  },
  {
    title: "NewPlaces",
    date: "Jul 2025",
    summary:
      "Social platform for discovering and sharing interesting places with posts, uploads, comments, and maps.",
    accent: "#F97316",
    monogram: "NP",
    imageSrc: newPlacesSrc,
    imageAlt: "NewPlaces social platform preview",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "JavaScript", Icon: JavaScriptBadgeIcon },
      { label: "Express.js", Icon: ExpressBadgeIcon },
      { label: "MongoDB", Icon: MongoDBBadgeIcon },
    ],
    links: [
      {
        label: "Frontend",
        href: "https://github.com/rtrevizo18/newplaces-frontend",
      },
      { label: "API", href: "https://github.com/rtrevizo18/newplaces-api" },
      { label: "Live", href: "https://newplaces-e2d77.web.app/" },
    ],
  },
  {
    title: "Upgrade Your Bumper",
    date: "Aug 2024 - Dec 2024",
    summary:
      "Arcade-style game where players upgrade their vehicle while progressing through increasingly difficult levels.",
    accent: "#14B8A6",
    monogram: "UB",
    imageSrc: uybSrc,
    imageAlt: "Upgrade Your Bumper game preview",
    badges: [
      { label: "Unity", Icon: UnityBadgeIcon },
      { label: "C#", Icon: CSharpBadgeIcon },
      { label: "Unity UI", Icon: CogBadgeIcon },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Next-Big-Studio/Upgrade-Your-Bumper-Public",
      },
      {
        label: "Itch.io",
        href: "https://nextbigstudio.itch.io/upgrade-your-bumper-2024",
      },
    ],
  },
  {
    title: "PyinCPP",
    date: "Mar 2024 - Apr 2024",
    summary:
      "Python interpreter built in C++ focused on a lightweight runtime and a clean execution pipeline.",
    accent: "#7C3AED",
    monogram: "PC",
    imageSrc: pyinCppSrc,
    imageAlt: "PyinCPP interpreter preview",
    badges: [
      { label: "Python", Icon: PythonBadgeIcon },
      { label: "C++", Icon: CppBadgeIcon },
    ],
    links: [{ label: "GitHub", href: "https://github.com/rtrevizo18/PyinCPP" }],
  },
];

function ProjectsSection() {
  const [hoveredBadgeKey, setHoveredBadgeKey] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="max-w-5xl">
        <p className="mb-8 font-semibold uppercase tracking-[0.38em] text-white/80 sm:text-2xl">
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
                {project.imageSrc ? (
                  <img
                    className="h-full w-full object-cover"
                    src={project.imageSrc}
                    alt={project.imageAlt ?? `${project.title} preview`}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-black/30 text-[1.05rem] font-black tracking-[0.16em] text-white/70"
                    aria-label={project.title}
                    role="img"
                  >
                    {project.monogram}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div
                  className="h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <div className="mt-4 flex flex-col items-start gap-2">
                  <h3 className="font-subway text-[clamp(1.35rem,2.6vw,1.95rem)] font-black leading-[0.96] tracking-[0.06em] text-white">
                    {project.title}
                  </h3>
                  <p className="text-[0.96rem] font-semibold uppercase tracking-[0.24em] text-white/58 sm:text-[1rem]">
                    {project.date}
                  </p>
                </div>
                <p className="mt-3 text-[1.06rem] leading-6 text-white/70 sm:text-[1.08rem]">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="mt-auto pt-5">
              <div className="flex flex-wrap gap-4 pb-4 sm:gap-5">
                {project.badges.map(({ label, Icon }) => {
                  const badgeKey = `${project.title}:${label}`;

                  return (
                    <div
                      key={label}
                      onMouseEnter={() => setHoveredBadgeKey(badgeKey)}
                      onMouseLeave={() => setHoveredBadgeKey(null)}
                    >
                      <BadgeIcon
                        label={label}
                        Icon={Icon}
                        color={project.accent}
                        isHovered={hoveredBadgeKey === badgeKey}
                        size="sm"
                      />
                    </div>
                  );
                })}
              </div>

              <div className="mt-2 border-t border-white/10 pt-4">
                <div className="flex min-h-5 flex-wrap items-center justify-end gap-5 text-[0.84rem] font-semibold uppercase tracking-[0.22em] text-white/68">
                  {(project.links ?? []).map(({ label, href }) => {
                    const linkClassName =
                      "transition-colors hover:text-white hover:underline hover:underline-offset-4";

                    return (
                      <a
                        key={label}
                        className={linkClassName}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
