
import { cn } from "@/lib/utils";

const ChartNode = ({ label, children, className }: { label: string; children?: React.ReactNode, className?: string }) => {
    return (
        <li className="relative">
            <div className={cn("mx-auto w-40 rounded-lg border-2 border-primary bg-background p-3 text-center font-semibold text-primary shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:shadow-xl", className)}>
                {label}
            </div>
            {children && <ul className="mt-8 flex justify-center gap-x-2 before:absolute before:left-1/2 before:top-[-32px] before:h-8 before:w-px before:bg-border">{children}</ul>}
        </li>
    );
};

const ChartSubNode = ({ label, children, className }: { label: string; children?: React.ReactNode, className?: string }) => {
  return (
      <li className="relative before:absolute before:left-1/2 before:top-[-32px] before:h-8 before:w-px before:bg-border after:absolute after:left-[-50%] after:top-[-32px] after:h-px after:w-full after:bg-border">
          <div className={cn("mx-auto w-40 rounded-lg border border-accent bg-background p-2 text-center text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:bg-accent/10 hover:shadow-lg", className)}>
              {label}
          </div>
          {children && <ul className="mt-8 flex justify-center gap-x-2 before:absolute before:left-1/2 before:top-[-32px] before:h-8 before:w-px before:bg-border">{children}</ul>}
      </li>
  );
};


export const OrgChart = () => {
    return (
        <div className="p-4 overflow-x-auto">
            <ul className="inline-block min-w-full text-center">
                <ChartNode label="Spl. Secretary">
                    <ChartSubNode label="Additional Secretary">
                        <ul className="mt-8 grid grid-cols-4 gap-x-2">
                             <ChartSubNode label="Sr. Technical Director" className="border-secondary text-secondary-foreground">
                                <ul className="mt-8">
                                    <ChartSubNode label="Deputy Director Scientist-C (NIC)" className="border-muted text-muted-foreground" />
                                </ul>
                             </ChartSubNode>
                             <ChartSubNode label="Joint Director" className="border-secondary text-secondary-foreground">
                                <ul className="mt-8">
                                    <ChartSubNode label="Assistant Director" className="border-muted text-muted-foreground" />
                                </ul>
                            </ChartSubNode>
                            <ChartSubNode label="Director" className="border-secondary text-secondary-foreground">
                                <ul className="mt-8">
                                    <ChartSubNode label="Deputy Director" className="border-muted text-muted-foreground">
                                        <ul className="mt-8">
                                            <ChartSubNode label="Section Officer" className="border-muted text-muted-foreground" />
                                        </ul>
                                    </ChartSubNode>
                                </ul>
                            </ChartSubNode>
                            <ChartSubNode label="Deputy Secretary" className="border-secondary text-secondary-foreground">
                                 <ul className="mt-8 grid grid-cols-2 gap-x-2">
                                    <ChartSubNode label="Under Secretary" className="border-muted text-muted-foreground" >
                                        <ul className="mt-8">
                                            <ChartSubNode label="Section Officer" className="border-muted text-muted-foreground" />
                                        </ul>
                                    </ChartSubNode>
                                    <ChartSubNode label="Resource Person" className="border-muted text-muted-foreground" />
                                </ul>
                            </ChartSubNode>
                        </ul>
                    </ChartSubNode>
                </ChartNode>
            </ul>
        </div>
    );
};
