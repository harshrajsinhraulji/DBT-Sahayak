
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ScholarshipSection } from "@/components/sections/scholarships";
import { StatusCheckerSection } from "@/components/sections/status-checker";
import { TakeActionSection } from "@/components/sections/take-action";
import { VideoSection } from "@/components/sections/videos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EducationSection />
      <VideoSection />
      <StatusCheckerSection />
      <TakeActionSection />
      <ScholarshipSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
