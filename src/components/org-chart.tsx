
import { cn } from "@/lib/utils";

const ChartNode = ({ label, children, className }: { label: React.ReactNode; children?: React.ReactNode, className?: string }) => {
    return (
        <li className="relative flex flex-col items-center">
            <div className={cn("mx-auto w-40 rounded-lg border-2 border-primary bg-background p-3 text-center font-semibold text-primary shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:shadow-xl z-10", className)}>
                {label}
            </div>
            {children && (
                <ul className="mt-12 flex justify-center gap-x-8 before:absolute before:h-12 before:top-[-48px] before:left-1/2 before:w-px before:bg-border before:z-0">
                    {children}
                </ul>
            )}
        </li>
    );
};

const ChartSubNode = ({ label, children, className }: { label: React.ReactNode; children?: React.ReactNode, className?: string }) => {
  return (
      <li className="relative flex flex-col items-center before:absolute before:h-12 before:top-[-48px] before:left-1/2 before:w-px before:bg-border after:absolute after:top-[-48px] after:h-px after:w-full after:bg-border after:z-0 first:after:hidden last:after:hidden">
          <div className={cn("mx-auto w-36 rounded-lg border border-accent bg-background p-2 text-center text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:bg-accent/10 hover:shadow-lg z-10", className)}>
              {label}
          </div>
          {children && (
              <ul className="mt-12 flex justify-center gap-x-8 before:absolute before:h-12 before:top-[-48px] before:left-1/2 before:w-px before:bg-border before:z-0">
                  {children}
              </ul>
          )}
      </li>
  );
};

export const OrgChart = () => {
    return (
        <div className="p-4 overflow-x-auto w-full">
            <ul className="inline-block min-w-full text-center whitespace-nowrap">
                <ChartNode label="Spl. Secretary">
                    <ChartSubNode label="Additional Secretary">
                        <ul className="mt-12 grid grid-cols-4 gap-x-8">
                             <ChartSubNode label={<span>Sr. Technical<br />Director</span>} className="border-secondary text-secondary-foreground">
                                <ul className="mt-12">
                                    <ChartSubNode label={<span>Deputy Director<br/>Scientist-C (NIC)</span>} className="border-muted text-muted-foreground w-40" />
                                </ul>
                             </ChartSubNode>
                             <ChartSubNode label="Joint Director" className="border-secondary text-secondary-foreground">
                                <ul className="mt-12">
                                    <ChartSubNode label="Assistant Director" className="border-muted text-muted-foreground" />
                                </ul>
                            </ChartSubNode>
                            <ChartSubNode label="Director" className="border-secondary text-secondary-foreground">
                                <ul className="mt-12">
                                    <ChartSubNode label="Deputy Director" className="border-muted text-muted-foreground">
                                        <ul className="mt-12">
                                            <ChartSubNode label="Section Officer" className="border-muted text-muted-foreground" />
                                        </ul>
                                    </ChartSubNode>
                                </ul>
                            </ChartSubNode>
                            <ChartSubNode label="Deputy Secretary" className="border-secondary text-secondary-foreground">
                                 <ul className="mt-12 grid grid-cols-2 gap-x-8">
                                    <ChartSubNode label="Under Secretary" className="border-muted text-muted-foreground" >
                                        <ul className="mt-12">
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
