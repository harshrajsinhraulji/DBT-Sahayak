import { Chatbot } from "@/components/chatbot";
import { AwarenessSection } from "@/components/sections/awareness";
import { EducationSection } from "@/components/sections/education";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ScholarshipSection } from "@/components/sections/scholarships";
import { StatusCheckerSection } from "@/components/sections/status-checker";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EducationSection />
      <StatusCheckerSection />
      <ScholarshipSection />
      <AwarenessSection />
      <FaqSection />
      <Chatbot />
    </div>
  );
}
