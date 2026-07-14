import portraitSrc from "../assets/Ricardo_Trevizo_Image.png";
import KIPPTexasLogo from "../assets/KIPPTexasLogo";
import PwCLogo from "../assets/PwCLogo";
import ExperienceCard from "./ExperienceCard";
import { CogBadgeIcon, ReactBadgeIcon } from "./BadgeIcons";

const footerBadgeIcons = [
  { label: "SysAdmin", Icon: CogBadgeIcon },
  { label: "React", Icon: ReactBadgeIcon },
];

const sharedMedia = (
  <div className="absolute inset-0 p-4">
    <img
      className="h-full w-full rounded-3xl object-cover object-center"
      src={portraitSrc}
      alt="Ricardo Trevizo portrait"
    />
  </div>
);

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
      </div>

      <div className="flex flex-col gap-8">
        <ExperienceCard
          title="KIPP Texas: Public Schools"
          date="May 2025 - June 2025"
          roles={["IT Operations Intern"]}
          description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization's online presence clear, functional, and up to date."
          logo={KIPPTexasLogo}
          color="#1E5AA8"
          logoWidth={176}
          logoHeight={50}
          mediaSide="right"
          media={sharedMedia}
          footerBadgeIcons={footerBadgeIcons}
        />
        <ExperienceCard
          title="PwC"
          date="June 2024 - July 2024"
          roles={["Cyber, Risk, & Regulation Consulting Intern"]}
          description="Worked with the CougarCS team on outreach and web development efforts, helping keep the organization's online presence clear, functional, and up to date."
          logo={PwCLogo}
          color="#FD5108"
          logoWidth={144}
          logoHeight={74}
          mediaSide="left"
          media={sharedMedia}
          footerBadgeIcons={footerBadgeIcons}
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
