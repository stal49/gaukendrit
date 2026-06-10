import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: NavLink[];
  actions?: React.ReactNode;
}

export default function Navbar({ links, actions }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const linkElements = links?.map((link) => (
    <Link key={link.href} href={link.href}>
      <a className="text-sm hover:text-primary transition">{link.label}</a>
    </Link>
  ));

  const mobileLinkElements = links?.map((link) => (
    <Link key={link.href} href={link.href}>
      <a
        onClick={() => setOpen(false)}
        className="text-lg font-medium hover:text-primary transition"
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: "Playfair Display" }}>
              Gaukendrit
            </span>
          </a>
        </Link>

        {links && (
          <div className="hidden md:flex items-center gap-8">
            {linkElements}
          </div>
        )}

        <div className="hidden md:flex items-center gap-6">
          {actions}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {mobileLinkElements}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {actions}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
