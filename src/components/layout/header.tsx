"use client";

import { useState } from "react";
import Link from "next/link";
import { Languages, Menu, User, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "../language-switcher";
import { useLanguage } from "@/hooks/use-language";
import { Logo } from "../logo";

export function Header() {
  const { content } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#education", label: content.header.nav.education },
    { href: "#videos", label: content.header.nav.videos },
    { href: "#status", label: content.header.nav.status },
    { href: "#grievance", label: content.header.nav.grievance },
    { href: "#scholarships", label: content.header.nav.scholarships },
    { href: "#myths", label: content.header.nav.myths },
    { href: "#faq", label: content.header.nav.faq },
    { href: "#contact", label: content.header.nav.contact },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline text-lg">
            {content.header.title}
          </span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleScroll}
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />
          <Button>
            <User className="mr-2 h-4 w-4" />
            {content.header.login}
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Logo className="h-6 w-6 text-primary" />
                  <span className="font-headline">{content.header.title}</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleScroll}
                    className="rounded-md p-2 text-lg font-medium hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
