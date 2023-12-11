import React from "react";
import Logo from "../ui/logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-[999] left-0 right-0 ">
      <div className="flex justify-between py-6">
        <Logo asLink />
        <div className="ml-20">
          <Button variant="link" className="text-secondary-foreground">
            <a href="#get-started">Get Started</a>
          </Button>
          <Button variant="link" className="text-secondary-foreground">
            <a href="#features">Features</a>
          </Button>
          <Button variant="link" className="text-secondary-foreground">
            <a href="#careers">Careers</a>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button>
            <Link href="/login">Sing In</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
