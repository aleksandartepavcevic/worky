import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    variant: {
      h1: "text-4xl font-extrabold lg:text-5xl",
      h4: "text-xl font-semibold",
      p: "leading-7 [&:not(:first-child)]:mt-6",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

type HeadingElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type TypographyProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof typographyVariants>;

function TypographyH1(props: HeadingElementProps) {
  return <h1 {...props} />;
}

function TypographyH4(props: HeadingElementProps) {
  return <h4 {...props} />;
}

function TypographyP(props: ParagraphElementProps) {
  return <p {...props} />;
}

export const Typography = ({
  variant = "h1",
  className,
  ...props
}: TypographyProps) => {
  const comLit = {
    h1: TypographyH1,
    h4: TypographyH4,
    p: TypographyP,
  };

  const Comp = comLit[variant as keyof typeof comLit];

  return (
    <Comp
      {...props}
      className={cn(typographyVariants({ variant, className }))}
    />
  );
};

export default Typography;
