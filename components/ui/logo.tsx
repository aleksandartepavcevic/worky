import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Logo = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Link href="/">
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
  </Link>
));

export default Logo;
