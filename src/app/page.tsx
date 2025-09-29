
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { MythBustersSection } from "@/components/sections/myth-busters";
import { PrintKitSection } from "@/components/sections/print-kit";
import { ScholarshipSection } from "@/components/sections/scholarships";
import { StatusCheckerSection } from "@/components/sections/status-checker";
import { TakeActionSection } from "@/components/sections/take-action";
import { VideoSection } from "@/components/sections/videos";
import { AwarenessSection } from "@/components/sections/awareness";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EducationSection />
      <StatusCheckerSection />
      <TakeActionSection />
      <AwarenessSection />
      <ScholarshipSection />
      <MythBustersSection />
      <VideoSection />
      <FaqSection />
      <PrintKitSection />
      <ContactSection />
    </div>
  );
}
