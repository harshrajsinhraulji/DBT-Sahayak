
import { cn } from "@/lib/utils";

const ChartNode = ({ label, className, children, noChildrenLine }: { label: string; className?: string; children?: React.ReactNode; noChildrenLine?: boolean }) => {
    return (
        <div className={cn("relative flex flex-col items-center", className)}>
            <div className="bg-primary/10 border-2 border-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-semibold text-center shadow-md">
                <p className="text-primary font-headline">{label}</p>
            </div>
            {children && (
                <>
                    {!noChildrenLine && <div className="absolute top-full h-4 w-0.5 bg-border"></div>}
                    <div className="relative mt-8 flex justify-center gap-x-2">
                        {children}
                    </div>
                </>
            )}
        </div>
    );
};

const Line = () => <div className="absolute top-[-16px] h-4 w-0.5 bg-border"></div>;
const Connector = () => <div className="absolute left-1/2 top-[-16px] h-0.5 w-full -translate-x-1/2 bg-border"></div>;

export const OrgChart = () => {
    return (
        <div className="p-4 overflow-x-auto">
            <div className="inline-block min-w-full">
                <ChartNode label="Spl. Secretary">
                    <ChartNode label="Additional Secretary">
                        <div className="relative">
                             <Connector />
                             <Line />
                             <ChartNode label="Sr. Technical Director">
                                 <ChartNode label="Deputy Director Scientist-C (NIC)" />
                             </ChartNode>
                        </div>
                        <div className="relative">
                            <Connector />
                             <Line />
                            <ChartNode label="Joint Director">
                                <ChartNode label="Assistant Director" />
                            </ChartNode>
                        </div>
                        <div className="relative">
                            <Connector />
                            <Line />
                            <ChartNode label="Director">
                                <ChartNode label="Deputy Director">
                                     <ChartNode label="Section Officer" />
                                </ChartNode>
                            </ChartNode>
                        </div>
                        <div className="relative">
                             <Connector />
                            <Line />
                            <ChartNode label="Deputy Secretary">
                                <ChartNode label="Under Secretary" noChildrenLine>
                                     <div className="relative">
                                        <Connector />
                                        <Line />
                                        <ChartNode label="Section Officer" />
                                     </div>
                                </ChartNode>
                                 <ChartNode label="Resource Person" />
                            </ChartNode>
                        </div>
                    </ChartNode>
                </ChartNode>
            </div>
        </div>
    );
};
