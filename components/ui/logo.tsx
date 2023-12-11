import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type LogoProps = React.HTMLAttributes<HTMLHeadingElement> & {
  asLink?: boolean;
};

const Logo = React.forwardRef<HTMLHeadingElement, LogoProps>(
  ({ className, asLink, ...props }, ref) => {
    const Comp = asLink ? Link : React.Fragment;
    return (
      <Comp href="/">
        <h3
          ref={ref}
          className={cn(
            "scroll-m-20 text-2xl font-pacifico tracking-tight text-primary",
            className
          )}
          {...props}
        >
          Worky
        </h3>
      </Comp>
    );
  }
);

export default Logo;
