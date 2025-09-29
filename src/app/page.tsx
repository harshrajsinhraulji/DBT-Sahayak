
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { HeroSection } from "@/components/sections/hero";
import { StatusCheckerSection } from "@/components/sections/status-checker";
import { TakeActionSection } from "@/components/sections/take-action";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EducationSection />
      <StatusCheckerSection />
      <TakeActionSection />
      <ContactSection />
    </div>
  );
}
