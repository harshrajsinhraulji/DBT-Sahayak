
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, User, LogOut, LayoutDashboard, Megaphone, Info, BookOpen, Search, Gamepad2, GraduationCap, Printer, Users, HelpCircle, Phone, GanttChartSquare } from "lucide-react";
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
import { useRouter } from "next/navigation";
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
  const { user, logout, isAdmin } = useAuth();

  const navItems = [
    { href: "#about", label: content.header.nav.about, icon: <Info /> },
    { href: "#education", label: content.header.nav.education, icon: <BookOpen /> },
    { href: "#status", label: content.header.nav.status, icon: <Search /> },
    { href: "#myths", label: content.header.nav.myths, icon: <Gamepad2 /> },
    { href: "#videos", label: content.header.nav.videos, icon: <Gamepad2 /> },
    { href: "#scholarships", label: content.header.nav.scholarships, icon: <GraduationCap /> },
    { href: "#print", label: "Print Kit", icon: <Printer /> },
    { href: "#awareness", label: "Awareness", icon: <Users /> },
    { href: "#faq", label: content.header.nav.faq, icon: <HelpCircle /> },
    { href: "#contact", label: content.header.nav.contact, icon: <Phone /> },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem?.scrollIntoView({
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    } else {
      router.push(`/${href.slice(href.lastIndexOf('#'))}`);
      setMobileMenuOpen(false);
    }
  };
  
  const handleLoginClick = () => {
    router.push('/login');
  }

  const handleDashboardClick = () => {
    router.push('/dashboard');
  }
  
  const handleNavigation = (path: string) => {
    router.push(path);
    setMobileMenuOpen(false);
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
           <Link
              href="/governance"
              className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Governance
            </Link>
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
                    <Button onClick={() => handleNavigation('/login')} className="w-full justify-start mb-2" variant="default" size="lg"><User />{content.header.login}</Button>
                    <DropdownMenuSeparator />
                    </>
                )}
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleScroll}
                    className="flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
                 <Link
                    href="/governance"
                    onClick={() => handleNavigation('/governance')}
                    className="flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted"
                  >
                    <GanttChartSquare />
                    Governance
                  </Link>
                <Link
                  href="/request-drive"
                  onClick={() => handleNavigation('/request-drive')}
                  className="flex items-center gap-3 rounded-md p-3 text-base font-medium hover:bg-muted"
                >
                  <Megaphone />
                  Request a Drive
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
