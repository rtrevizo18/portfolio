import cougarCsLogo from "../assets/CougarCS.svg";
import ExperienceCard from "./ExperienceCard";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="max-w-5xl">
        <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-white/80 sm:text-[0.75rem]">
          Experience
        </p>
        <ExperienceCard
          title="CougarCS"
          roles={["Corporate Relations Officer", "Web Dev Member"]}
          description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization&apos;s online presence clear, functional, and up to date."
          logoSrc={cougarCsLogo}
          logoAlt="CougarCS logo"
          galleryImages={[
            {
              src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
              alt: "Team members collaborating around a laptop",
            },
            {
              src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
              alt: "Developer working on code",
            },
            {
              src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
              alt: "Meeting room with people discussing a project",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default ExperienceSection;