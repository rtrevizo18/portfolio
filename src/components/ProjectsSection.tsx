import { useState } from "react";
import type { ComponentType, SVGProps } from "react";

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

type Project = {
  title: string;
  date: string;
  summary: string;
  accent: string;
  monogram: string;
  badges: ProjectBadge[];
};

const projects: Project[] = [
  {
    title: "CougarCS Talent-Sourcing Portal (WIP)",
    date: "Jul 2026 - Present",
    summary:
      "Internal recruiting platform that helps CougarCS source, organize, and manage internship opportunities and company outreach.",
    accent: "#1E5AA8",
    monogram: "CS",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "Express.js", Icon: ExpressBadgeIcon },
      { label: "PostgreSQL", Icon: PostgreSQLBadgeIcon },
    ],
  },
  {
    title: "Portfolio Website",
    date: "Jul 2026 - Present",
    summary:
      "Personal portfolio showcasing projects, experience, resume, and technical skills with a polished, accessible UI.",
    accent: "#FD5108",
    monogram: "PW",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "Vite", Icon: ViteBadgeIcon },
    ],
  },
  {
    title: "Luminescence",
    date: "Jan 2026 - May 2026",
    summary:
      "Puzzle-adventure game built in Unity focusing on interactive gameplay mechanics, UI flow, and scene management.",
    accent: "#8B5CF6",
    monogram: "LM",
    badges: [
      { label: "Unity", Icon: UnityBadgeIcon },
      { label: "C#", Icon: CSharpBadgeIcon },
      { label: "Unity UI", Icon: CogBadgeIcon },
    ],
  },
  {
    title: "Volunter Volunteering Platform",
    date: "Sept 2025 - Dec 2025",
    summary:
      "Platform connecting volunteers with organizations through location-aware opportunities, dashboards, and REST APIs.",
    accent: "#10B981",
    monogram: "VP",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "FastAPI", Icon: FastAPIBadgeIcon },
      { label: "PostgreSQL", Icon: PostgreSQLBadgeIcon },
      { label: "Docker", Icon: DockerBadgeIcon },
    ],
  },
  {
    title: "AI EMS Vehicle Routing",
    date: "Sept 2025 - Dec 2025",
    summary:
      "AI-driven emergency vehicle routing system that predicts traffic conditions and recommends optimal routes.",
    accent: "#E11D48",
    monogram: "AE",
    badges: [
      { label: "Python", Icon: PythonBadgeIcon },
      { label: "PyTorch", Icon: PyTorchBadgeIcon },
      { label: "SUMO", Icon: SumoBadgeIcon },
      { label: "ML", Icon: CogBadgeIcon },
    ],
  },
  {
    title: "Zentra Credit Card Analyzer",
    date: "Sept 2025",
    summary:
      "AI-powered credit card recommendation tool that analyzes spending habits to recommend the best rewards cards.",
    accent: "#2563EB",
    monogram: "ZA",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "Python", Icon: PythonBadgeIcon },
      { label: "FastAPI", Icon: FastAPIBadgeIcon },
      { label: "MongoDB", Icon: MongoDBBadgeIcon },
    ],
  },
  {
    title: "Tecpacs Package Manager",
    date: "Jul 2025",
    summary:
      "Lightweight package manager created during HackRice that simplifies sharing and installing small software packages.",
    accent: "#0F766E",
    monogram: "TP",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "TypeScript", Icon: TypeScriptBadgeIcon },
      { label: "TailwindCSS", Icon: TailwindBadgeIcon },
      { label: "Express.js", Icon: ExpressBadgeIcon },
      { label: "SQLite", Icon: SQLiteBadgeIcon },
    ],
  },
  {
    title: "NewPlaces",
    date: "Jul 2025",
    summary:
      "Social platform for discovering and sharing interesting places with posts, uploads, comments, and maps.",
    accent: "#F97316",
    monogram: "NP",
    badges: [
      { label: "React", Icon: ReactTechBadgeIcon },
      { label: "JavaScript", Icon: JavaScriptBadgeIcon },
      { label: "Express.js", Icon: ExpressBadgeIcon },
      { label: "MongoDB", Icon: MongoDBBadgeIcon },
    ],
  },
  {
    title: "Upgrade Your Bumper",
    date: "Aug 2024 - Dec 2024",
    summary:
      "Arcade-style game where players upgrade their vehicle while progressing through increasingly difficult levels.",
    accent: "#14B8A6",
    monogram: "UB",
    badges: [
      { label: "Unity", Icon: UnityBadgeIcon },
      { label: "C#", Icon: CSharpBadgeIcon },
      { label: "Unity UI", Icon: CogBadgeIcon },
    ],
  },
];

type ProjectPreviewProps = {
  title: string;
  monogram: string;
  accent: string;
};

function ProjectPreview({ title, monogram, accent }: ProjectPreviewProps) {
  const gradientId = `${monogram.toLowerCase()}-gradient`;

  return (
    <svg
      aria-label={title}
      role="img"
      className="h-full w-full"
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
          <stop offset="100%" stopColor="#050505" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" rx="28" fill={`url(#${gradientId})`} />
      <circle cx="246" cy="74" r="86" fill="white" fillOpacity="0.08" />
      <circle cx="86" cy="238" r="122" fill={accent} fillOpacity="0.16" />
      <path
        d="M-12 242C76 208 146 190 234 120c46-37 78-61 122-77v52c-44 14-78 36-126 74-79 63-147 84-222 109z"
        fill="white"
        fillOpacity="0.06"
      />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="84"
        fontWeight="800"
        letterSpacing="8"
      >
        {monogram}
      </text>
    </svg>
  );
}

function ProjectsSection() {
  const [hoveredBadgeKey, setHoveredBadgeKey] = useState<string | null>(null);

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
                <ProjectPreview
                  title={project.title}
                  monogram={project.monogram}
                  accent={project.accent}
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
