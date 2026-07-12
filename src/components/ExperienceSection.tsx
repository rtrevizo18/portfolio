import CougarCSLogo from "../assets/CougarCSLogo";
import KIPPTexasLogo from "../assets/KIPPTexasLogo";
import PwCLogo from "../assets/PwCLogo";
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
            description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization's online presence clear, functional, and up to date."
            logo={CougarCSLogo}
            color="#C80F2E"
            logoWidth={100}
            logoHeight={114}
          />
          <ExperienceCard
            title="KIPP Texas: Public Schools"
            roles={["IT Operations Intern"]}
            description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization's online presence clear, functional, and up to date."
            logo={KIPPTexasLogo}
            color="#1E5AA8"
            logoWidth={176}
            logoHeight={50}
          />
          <ExperienceCard
            title="PwC"
            roles={["Cyber, Risk, & Regulation Consulting Intern"]}
            description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization's online presence clear, functional, and up to date."
            logo={PwCLogo}
            color="#FD5108"
            logoWidth={144}
            logoHeight={74}
          />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
