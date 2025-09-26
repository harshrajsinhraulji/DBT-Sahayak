import { Chatbot } from "@/components/chatbot";
import { AwarenessSection } from "@/components/sections/awareness";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { FaqSection } from "@/components/sections/faq";
import { FormChecker } from "@/components/sections/form-checker";
import { GrievanceHelper } from "@/components/sections/grievance-helper";
import { HeroSection } from "@/components/sections/hero";
import { MythBustersSection } from "@/components/sections/myth-busters";
import { ScholarshipSection } from "@/components/sections/scholarships";
import { StatusCheckerSection } from "@/components/sections/status-checker";
import { VideoSection } from "@/components/sections/videos";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EducationSection />
      <VideoSection />
      <StatusCheckerSection />
      <GrievanceHelper />
      <FormChecker />
      <ScholarshipSection />
      <MythBustersSection />
      <AwarenessSection />
      <FaqSection />
      <ContactSection />
      <Chatbot />
    </div>
  );
}
