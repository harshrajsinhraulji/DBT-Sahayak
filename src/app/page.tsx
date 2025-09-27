import { AboutDbtSection } from "@/components/sections/about-dbt";
import { AwarenessSection } from "@/components/sections/awareness";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { MythBustersSection } from "@/components/sections/myth-busters";
import { ScholarshipSection } from "@/components/sections/scholarships";
import { StatusCheckerSection } from "@/components/sections/status-checker";
import { VideoSection } from "@/components/sections/videos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatusCheckerSection />
      <EducationSection />
      <MythBustersSection />
      <VideoSection />
      <ScholarshipSection />
      <AboutDbtSection />
      <FaqSection />
      <AwarenessSection />
      <ContactSection />
    </div>
  );
}
