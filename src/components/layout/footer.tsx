
"use client"

import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";
import { Github, Send, Printer, Users, GanttChartSquare, BrainCircuit, Users2, BookOpen, Search, GraduationCap, HelpCircle, Phone, Info } from "lucide-react";
import Link from "next/link";
import { NationalEmblemOfIndia } from "../national-emblem";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold sm:inline-block font-headline text-lg">
                {content.header.title}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              {content.footer.tagline}
            </p>
             <div className="flex items-center gap-4">
                <NationalEmblemOfIndia className="h-10 w-10 text-muted-foreground" />
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">{content.footer.credits}</p>
                  <a href="https://socialjustice.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline font-semibold">
                    Ministry of Social Justice & Empowerment
                  </a>
                </div>
            </div>
          </div>
          
          {/* Right Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="grid gap-2">
               <h3 className="font-semibold text-foreground">{content.footer.navigation}</h3>
               <Link href="/#education" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><BookOpen className="h-4 w-4" />{content.header.nav.education}</Link>
               <Link href="/#status" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Search className="h-4 w-4"/>{content.header.nav.status}</Link>
               <Link href="/#contact" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Phone className="h-4 w-4"/>{content.header.nav.contact}</Link>
            </div>
             <div className="grid gap-2">
               <h3 className="font-semibold text-foreground">{content.footer.resources}</h3>
               <Link href="/governance" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><GanttChartSquare className="h-4 w-4" />{content.header.nav.governance}</Link>
               <Link href="/resources" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><BrainCircuit className="h-4 w-4" />{content.header.nav.resources}</Link>
               <Link href="/print-kit" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Printer className="h-4 w-4" />{content.header.nav.printKit}</Link>
               <Link href="/request-drive" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Users className="h-4 w-4" />{content.header.nav.requestDrive}</Link>
            </div>
             <div className="grid gap-2">
               <h3 className="font-semibold text-foreground">{content.footer.about}</h3>
               <Link href="/about-team" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Users2 className="h-4 w-4" />{content.header.nav.aboutTeam}</Link>

                <Dialog>
                    <DialogTrigger asChild>
                       <Button variant="link" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2 p-0 h-auto justify-start"><Info className="h-4 w-4" />{content.footer.learnMore}</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl">
                        <DialogHeader>
                        <DialogTitle className="font-headline text-2xl">Direct Benefit Transfer (DBT) in India</DialogTitle>
                        <DialogDescription>
                           An overview of India’s landmark governance reform for welfare delivery.
                        </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="max-h-[70vh] pr-6">
                            <div className="space-y-6 text-sm py-4 text-muted-foreground">
                                <div>
                                    <h4 className="font-bold text-lg text-primary mb-2">Overview</h4>
                                    <p>India’s Direct Benefit Transfer (DBT) is a landmark governance reform launched in January 2013 to overhaul welfare delivery. Under DBT, subsidies and welfare benefits are credited directly into beneficiaries’ bank or post office accounts (preferably Aadhaar-linked), bypassing intermediaries. The scheme aims to improve targeting, reduce leakage and fraud, and ensure timely payments to intended recipients. DBT has grown rapidly: by FY2025‑26 it covers hundreds of schemes and hundreds of crore transactions, with an official portal reporting ₹2.89 lakh crore transferred in 278 crore transactions (FY2025‑26) and estimated cumulative gains of ₹4.31 lakh crore from plugging leakages.</p>
                                </div>
                                <Separator/>
                                <div>
                                    <h4 className="font-bold text-lg text-primary mb-2">1. Definition and Historical Context</h4>
                                    <p className="mb-2"><strong className="text-foreground">Definition (DBT):</strong> The Direct Benefit Transfer scheme was introduced on 1 January 2013 as a “major reform initiative” of the Government of India. It leverages modern ICT to re-engineer welfare delivery: benefits (cash or kind) are disbursed directly into beneficiaries’ bank or post office accounts, which are preferably linked to their Aadhaar unique ID.</p>
                                    <p><strong className="text-foreground">Origins:</strong> DBT was conceived to address chronic inefficiencies and “cumbersome delivery processes” in India’s welfare system. Its pilot began in January 2013 in select districts covering schemes like scholarships and women’s welfare. Early success led to nationwide rollout: by December 2014 DBT was expanded countrywide, and by 2015 the Government mandated use of a unified electronic payment platform (PFMS) for all central disbursements. In this way, DBT was one of the first major initiatives under the later “Digital India” umbrella (launched 2015) and in tandem with financial inclusion drives (e.g. JAM trinity: Jan Dhan, Aadhaar, Mobile).</p>
                                </div>
                                <Separator/>
                                <div>
                                    <h4 className="font-bold text-lg text-primary mb-2">2. Objectives and Policy Rationale</h4>
                                    <p>The government’s primary objectives in implementing DBT are to enhance efficiency, transparency and targeting in welfare delivery. Key stated goals include:</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        <li><strong className="text-foreground">Curb Leakages and Ghosts:</strong> Eliminate duplicate, fake or ghost beneficiaries and cut out intermediaries, thereby stopping leakage and subsidy diversion.</li>
                                        <li><strong className="text-foreground">Accurate Targeting:</strong> Ensure that benefits reach only the intended, identified recipients.</li>
                                        <li><strong className="text-foreground">Timely Payments:</strong> Reduce bureaucratic delay by automating transfer.</li>
                                        <li><strong className="text-foreground">Minimal Layers:</strong> Use electronic, cashless payments to minimize manual layers in the disbursement chain.</li>
                                    </ul>
                                </div>
                                <Separator/>
                                 <div>
                                    <h4 className="font-bold text-lg text-primary mb-2">3. Governance and Institutional Framework</h4>
                                    <p>Implementing DBT involves multiple institutions across levels of government:</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-2">
                                        <li><strong className="text-foreground">National DBT Mission (Cabinet Secretariat):</strong> The nodal body for policy, guidelines and coordination.</li>
                                        <li><strong className="text-foreground">Finance Ministry – Controller General of Accounts (CGA):</strong> The Public Financial Management System (PFMS), run by the CGA, is the central payments/reconciliation platform for DBT.</li>
                                        <li><strong className="text-foreground">State DBT Cells:</strong> States/UTs have set up DBT cells to customize and monitor implementation on the ground.</li>
                                        <li><strong className="text-foreground">National Informatics Centre (NIC):</strong> The DBT Bharat portal (dbtbharat.gov.in) – built by NIC – aggregates scheme-wise data and manages technical integration.</li>
                                        <li><strong className="text-foreground">NPCI – Aadhaar Payment Bridge (APB):</strong> The National Payments Corporation of India (NPCI) operates the APB system, which uses the Aadhaar number to route benefits to the correct bank account.</li>
                                        <li><strong className="text-foreground">Sectoral Ministries and Implementing Agencies:</strong> Each ministry/department running welfare schemes creates its own IT system to generate lists of beneficiaries.</li>
                                    </ul>
                                </div>
                                 <Separator/>
                                 <div>
                                    <h4 className="font-bold text-lg text-primary mb-2">4. Technical Infrastructure</h4>
                                     <p className="mb-2"><strong className="text-foreground">Aadhaar and Aadhaar Seeding:</strong> Aadhaar is the critical enabler of DBT. Seeding (linking an Aadhaar number to a bank account) allows the Aadhaar Payment Bridge (APB) to route funds to the correct account without needing the account number.</p>
                                     <p className="mb-2"><strong className="text-foreground">Banking System Integration:</strong> DBT payments flow through India’s banking infrastructure, primarily using the Public Financial Management System (PFMS) as the central payment gateway.</p>
                                     <p><strong className="text-foreground">Data Flows and APIs:</strong> Data flows in DBT follow digital pipelines. Scheme MIS generate Fund Transfer Files, which are validated by PFMS/APB using APIs from UIDAI and RBI before payment is processed.</p>
                                </div>
                                <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">5. Aadhaar Seeding – Process, Challenges, and Impact</h4>
                                     <p>The process involves enrolling for Aadhaar, having the bank seed it into its Core Banking System (CBS), and the bank uploading this to NPCI’s APB mapper. Challenges include exclusion errors due to biometric failures or lack of access, and privacy concerns. However, the impact has been the elimination of fake beneficiaries and ease of updating bank accounts for receiving benefits.</p>
                                 </div>
                                 <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">6. Major DBT-Linked Schemes</h4>
                                     <p>Key examples include PAHAL (LPG Subsidy), MGNREGA Wages, PM-KISAN, National Social Assistance Programme (NSAP) Pensions, and various scholarships through the National Scholarship Portal (NSP).</p>
                                 </div>
                                 <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">7. Benefits and Achievements of DBT</h4>
                                     <p>DBT has plugged leakages (saving ₹4.31 lakh crore), improved efficiency and transparency, driven financial inclusion (over 45 crore Jan Dhan accounts), and empowered citizens. It was also critical for delivering relief during the COVID-19 pandemic.</p>
                                 </div>
                                 <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">8. Common Misconceptions and Criticisms</h4>
                                     <p>A major misconception is that Aadhaar is mandatory; it is preferred but not compulsory. Criticisms focus on "last-mile" exclusion issues due to infrastructure gaps or technical barriers, and data privacy concerns, although these are being addressed through legal and technical safeguards.</p>
                                 </div>
                                  <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">9. Statistical Data and Impact Evaluation</h4>
                                     <p>As of September 2023, over 104 crore citizens are registered as DBT beneficiaries. Total transfers have exceeded ₹44 lakh crore. Official estimates cite cumulative gains of ₹4.31 lakh crore from eliminating fake beneficiaries. Studies confirm reduced subsidy diversion and high beneficiary satisfaction.</p>
                                 </div>
                                 <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">10. Legal Framework and Court Rulings</h4>
                                     <p>The Aadhaar Act, 2016 (Section 7) provides the legal basis for using Aadhaar for subsidies. The Supreme Court (Puttaswamy vs. UoI, 2018) upheld this for welfare schemes but struck down mandatory linking for private services. The court also established privacy as a fundamental right, shaping the ongoing legal landscape for DBT.</p>
                                 </div>
                                 <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">11. Challenges and Ongoing Issues</h4>
                                     <p>Persistent challenges include infrastructure gaps in remote areas, data quality issues in beneficiary databases, "last-mile" exclusion hurdles for marginalized groups, and the need for better integration between different scheme portals.</p>
                                 </div>
                                 <Separator/>
                                 <div>
                                     <h4 className="font-bold text-lg text-primary mb-2">12. Recommendations and Future Roadmap</h4>
                                     <p>The future roadmap, often called "DBT 2.0," focuses on real-time digital eligibility verification, consolidating multiple subsidies into single cash transfers, strengthening last-mile delivery with more robust technology and grievance redressal, and expanding DBT principles to new sectors like health and climate resilience.</p>
                                 </div>
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
                
                 <a href="https://github.com/harshrajsinhraulji/DBT-Sahayak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Github className="h-4 w-4" />{content.footer.github}</a>
                 <a href="https://t.me/DBTsahayakbot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"><Send className="h-4 w-4" />{content.footer.telegram}</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

    