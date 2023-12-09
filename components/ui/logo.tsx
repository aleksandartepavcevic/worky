import { cn } from "@/utils/utils";
import React from "react";

const Logo = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
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
));

export default Logo;
