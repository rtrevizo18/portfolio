import cougarCsLogo from "../assets/CougarCS.svg";
import kippTexasLogo from "../assets/KIPPTexas.svg"
import ExperienceCard from "./ExperienceCard";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="max-w-5xl">
        <p className="mb-8 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-white/80 sm:text-[0.75rem]">
          Experience
        </p>
        <div className="flex flex-col gap-8">
          <ExperienceCard
            title="CougarCS"
            roles={["Corporate Relations Officer", "Web Dev Member"]}
            description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization&apos;s online presence clear, functional, and up to date."
            logoSrc={cougarCsLogo}
            logoAlt="CougarCS logo"
          />
          <ExperienceCard
            title="KIPP Texas: Public Schools"
            roles={["IT Operations Intern"]}
            description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization&apos;s online presence clear, functional, and up to date."
            logoSrc={kippTexasLogo}
            logoAlt="KIPP Texas: Public Schools Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;