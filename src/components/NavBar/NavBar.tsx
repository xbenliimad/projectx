"use client";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  const features = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Services",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Support",
      href: "#",
    },
  ];

  return (
    <section className="py-4">
      <div className="w-full px-16 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2"
          >
            <span className="text-lg font-semibold tracking-tighter">
              PROJECT X
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {features.map((feature, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href="/"
                    className={navigationMenuTriggerStyle()}
                  >
                    {feature.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">Sign in</Button>
            <Button>Sign up</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="/"
                    className="flex items-center gap-2"
                  >
                    <span className="text-lg font-semibold tracking-tighter">
                      PROJECTX
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {features.map((feature, index) => (
                    <a key={index} href={feature.href} className="font-medium">
                      {feature.title}
                    </a>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Sign up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
