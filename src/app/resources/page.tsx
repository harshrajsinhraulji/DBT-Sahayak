
import { AwarenessSection } from "@/components/sections/awareness";
import { FaqSection } from "@/components/sections/faq";
import { MythBustersSection } from "@/components/sections/myth-busters";
import { ScholarshipSection } from "@/components/sections/scholarships";
import { VideoSection } from "@/components/sections/videos";

export default function ResourcesPage() {
    return (
        <div className="flex flex-col">
            <AwarenessSection />
            <ScholarshipSection />
            <MythBustersSection />
            <VideoSection />
            <FaqSection />
        </div>
    );
}
