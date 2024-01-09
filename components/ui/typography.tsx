import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('scroll-m-20 tracking-tight', {
    variants: {
        variant: {
            h1: 'text-4xl font-extrabold lg:text-5xl',
            h2: 'text-3xl font-semibold',
            h4: 'text-xl font-semibold',
            p: 'leading-7',
        },
    },
    defaultVariants: {
        variant: 'h1',
    },
});

type HeadingElementProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphElementProps = React.HTMLAttributes<HTMLParagraphElement>;
type TypographyProps = React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof typographyVariants>;

function TypographyH1({ children, ...rest }: HeadingElementProps) {
    return <h1 {...rest}>{children}</h1>;
}

function TypographyH2({ children, ...rest }: HeadingElementProps) {
    return <h2 {...rest}>{children}</h2>;
}

function TypographyH4({ children, ...rest }: HeadingElementProps) {
    return <h4 {...rest}>{children}</h4>;
}

function TypographyP(props: ParagraphElementProps) {
    return <p {...props} />;
}

export function Typography({
    variant = 'h1',
    className,
    ...props
}: TypographyProps) {
    const comLit = {
        h1: TypographyH1,
        h2: TypographyH2,
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
}

export default Typography;
