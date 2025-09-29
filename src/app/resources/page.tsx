
import { AwarenessSection } from "@/components/sections/awareness";
import { MythBustersSection } from "@/components/sections/myth-busters";
import { VideoSection } from "@/components/sections/videos";

export default function ResourcesPage() {
    return (
        <div className="flex flex-col">
            <MythBustersSection />
            <VideoSection />
            <AwarenessSection />
        </div>
    );
}
