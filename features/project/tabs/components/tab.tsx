import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Url } from 'next/dist/shared/lib/router/router';
import { Button } from '@/components/ui/button';

type TabProps = {
    name: string;
    href: Url;
};

function Tab({ name, href }: TabProps) {
    const pathname = usePathname();

    const isActive = pathname.includes(`/${name.toLocaleLowerCase()}`);

    return (
        <Button
            asChild
            variant="tab"
            size="lg"
            className="relative h-14"
            data-active={isActive}>
            <Link href={href}>
                {name}
                {isActive ? (
                    <motion.div
                        className="absolute left-0 top-0 w-full h-[6px] bg-primary rounded-bl-md rounded-br-md"
                        layoutId="line"
                    />
                ) : null}
            </Link>
        </Button>
    );
}

export default Tab;
