
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, User, LogOut, LayoutDashboard, Info, BookOpen, Search, GraduationCap, Users, HelpCircle, Phone, GanttChartSquare, Printer, BrainCircuit, FileCheck, Users2, Video, Megaphone } from "lucide-react";
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
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { ThemeSwitcher } from "../theme-switcher";

export function Header() {
  const { content } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout, isAdmin } = useAuth();

  const navItems = [
    { href: "/#education", label: content.header.nav.education, icon: <BookOpen /> },
    { href: "/#videos", label: content.header.nav.videos, icon: <Video /> },
    { href: "/#status", label: content.header.nav.status, icon: <Search /> },
    { href: "/#take-action", label: content.header.nav.takeAction, icon: <Megaphone /> },
    { href: "/#scholarships", label: content.header.nav.scholarships, icon: <GraduationCap /> },
    { href: "/#faq", label: content.header.nav.faq, icon: <HelpCircle /> },
    { href: "/#contact", label: content.header.nav.contact, icon: <Phone /> },
  ];
  
  const actionItems = [
      { href: "/form-checker", label: content.header.nav.formChecker, icon: <FileCheck /> },
      { href: "/governance", label: content.header.nav.governance, icon: <GanttChartSquare /> },
      { href: "/resources", label: content.header.nav.resources, icon: <BrainCircuit /> },
      { href: "/about-team", label: content.header.nav.aboutTeam, icon: <Users2 /> },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('/#') && pathname === '/') {
        const targetId = href.substring(href.indexOf('#') + 1);
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: "smooth" });
    } else {
        router.push(href);
    }
  };
  
  const handleLoginClick = () => {
    router.push('/login');
  }

  const handleDashboardClick = () => {
    router.push('/dashboard');
  }

  const handleLogoutClick = async () => {
    await logout();
    router.push('/');
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline text-lg">
            {content.header.title}
          </span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm lg:flex">
          {[...navItems, ...actionItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
           {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.displayName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDashboardClick}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                 {isAdmin && (
                  <DropdownMenuItem onClick={() => router.push('/admin')}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Admin Panel</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogoutClick}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={handleLoginClick} variant="ghost" className="hidden lg:inline-flex">
              {content.header.login}
            </Button>
          )}
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
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
              <div className="mt-8 flex flex-col gap-1">
                {!user && (
                    <>
                    <Button onClick={() => { handleLoginClick(); setMobileMenuOpen(false); }} className="w-full justify-start mb-2" variant="default" size="lg"><User />{content.header.login}</Button>
                    <DropdownMenuSeparator />
                    </>
                )}
                {[...navItems, ...actionItems].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/request-drive"
                  onClick={(e) => handleNavClick(e, '/request-drive')}
                  className="flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted"
                >
                  <Users />
                  {content.header.nav.requestDrive}
                </Link>
                 <Link
                  href="/print-kit"
                  onClick={(e) => handleNavClick(e, '/print-kit')}
                  className="flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted"
                >
                  <Printer />
                  {content.header.nav.printKit}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
