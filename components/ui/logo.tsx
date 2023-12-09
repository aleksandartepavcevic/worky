import { cn } from "@/lib/utils";
import React from "react";

const Logo = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }) => (
  <h3
    className={cn(
      "scroll-m-20 text-2xl font-pacifico tracking-tight text-primary",
      className
    )}
    {...props}
  >
    Worky
  </h3>
));

export default Logo;
