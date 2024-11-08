"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footprints, Trophy, User, Menu } from "lucide-react";
import { useState } from "react";

function NavButton({
  href,
  icon,
  label,
  fullWidth = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  fullWidth?: boolean;
}) {
  return (
    <Button
      variant="ghost"
      asChild
      className={fullWidth ? "w-full justify-start" : ""}
    >
      <Link href={href}>
        {icon}
        {label}
      </Link>
    </Button>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavButtons = () => (
    <>
      <NavButton
        href="/activity"
        icon={<Footprints className="mr-2 h-4 w-4" />}
        label="Activity"
      />
      <NavButton
        href="/achievements"
        icon={<Trophy className="mr-2 h-4 w-4" />}
        label="Goals"
      />
      <NavButton
        href="/parent"
        icon={<User className="mr-2 h-4 w-4" />}
        label="Parent"
      />
    </>
  );

  return (
    <nav className="bg-white dark:bg-black text-primary dark:text-white border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          GoalGetter
        </Link>
        <div className="hidden md:flex space-x-2">
          <NavButtons />
        </div>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <NavButtons />
        </div>
      )}
    </nav>
  );
}
