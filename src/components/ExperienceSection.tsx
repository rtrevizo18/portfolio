import kippTexasImage from "../assets/KIPPTexas_Image.png";
import pwcImage from "../assets/PWC_Image.png";
import KIPPTexasLogo from "../assets/KIPPTexasLogo";
import PwCLogo from "../assets/PwCLogo";
import ExperienceCard from "./ExperienceCard";
import {
  CogBadgeIcon,
  DesktopBadgeIcon,
  PeopleBadgeIcon,
  NeuralNetworkBadgeIcon,
  PowerBIBadgeIcon,
  PythonBadgeIcon,
  WrenchBadgeIcon,
} from "./BadgeIcons";

const kippFooterBadgeIcons = [
  { label: "SysAdmin", Icon: CogBadgeIcon },
  { label: "Hardware", Icon: DesktopBadgeIcon },
  { label: "Teamwork", Icon: PeopleBadgeIcon },
  { label: "Maintainence", Icon: WrenchBadgeIcon },
];

const pwcFooterBadgeIcons = [
  { label: "AI", Icon: NeuralNetworkBadgeIcon },
  { label: "Cross-functional", Icon: PeopleBadgeIcon },
  { label: "PowerBI", Icon: PowerBIBadgeIcon },
  { label: "Python", Icon: PythonBadgeIcon },
];

const kippTexasMedia = (
  <div className="absolute inset-0 p-4">
    <img
      className="h-full w-full rounded-3xl object-cover object-center"
      src={kippTexasImage}
      alt="Ricardo Trevizo portrait"
    />
  </div>
);

const pwcMedia = (
  <div className="absolute inset-0 p-4">
    <img
      className="h-full w-full rounded-3xl object-cover object-center"
      src={pwcImage}
      alt="Ricardo Trevizo portrait"
    />
  </div>
);

function ExperienceSection() {
  return (
    <section
      id="work"
      className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14"
    >
      <div className="max-w-5xl">
        <p className="mb-8 font-semibold uppercase tracking-[0.42em] text-white/80 sm:text-2xl">
          Work
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <ExperienceCard
          title="KIPP Texas: Public Schools"
          date="May 2025 - June 2025"
          roles={["IT Operations Intern"]}
          description="Managed large-scale IT operations for 3,000+ client devices, performing system maintenance, software deployments, and troubleshooting to ensure reliable technology access for staff and students."
          logo={KIPPTexasLogo}
          color="#1E5AA8"
          logoWidth={176}
          logoHeight={50}
          mediaSide="right"
          media={kippTexasMedia}
          footerBadgeIcons={kippFooterBadgeIcons}
        />
        <ExperienceCard
          title="PwC"
          date="June 2024 - July 2024"
          roles={["Cyber, Risk, & Regulation Consulting Intern"]}
          description="Evaluated AI product for a pro-bono consulting engagement by analyzing user data with Python and Power BI, identifying performance insights and workflow bottlenecks that accelerated MVP delivery by 2 weeks."
          logo={PwCLogo}
          color="#FD5108"
          logoWidth={144}
          logoHeight={74}
          mediaSide="left"
          media={pwcMedia}
          footerBadgeIcons={pwcFooterBadgeIcons}
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
