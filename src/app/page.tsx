
import { EducationSection } from "@/components/sections/education";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ScholarshipSection } from "@/components/sections/scholarships";
import { StatusCheckerSection } from "@/components/sections/status-checker";
import { TakeActionSection } from "@/components/sections/take-action";
import { ContactSection } from "@/components/sections/contact";
import { MythBustersSection } from "@/components/sections/myth-busters";
import { VideoSection } from "@/components/sections/videos";
import { AwarenessSection } from "@/components/sections/awareness";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EducationSection />
      <StatusCheckerSection />
      <AwarenessSection />
      <ScholarshipSection />
      <TakeActionSection />
      <MythBustersSection />
      <VideoSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
