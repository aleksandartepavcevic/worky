import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Logo from '../ui/logo';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { createServerClient } from '@/hooks/supabase';

async function Navigation() {
    const supabase = createServerClient();
    const { data } = await supabase.auth.getSession();

    return (
        <nav className="sticky top-0 z-[999] left-0 right-0 ">
            <div className="flex justify-between py-6">
                <Logo asLink />
                <div className="hidden md:block ml-20">
                    <Button
                        asChild
                        variant="link"
                        className="text-secondary-foreground">
                        <Link href="#get-started">Get Started</Link>
                    </Button>
                    <Button
                        asChild
                        variant="link"
                        className="text-secondary-foreground">
                        <Link href="#features">Features</Link>
                    </Button>
                    <Button
                        asChild
                        variant="link"
                        className="text-secondary-foreground">
                        <Link href="#cLinkreers">Careers</Link>
                    </Button>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />
                    <Button asChild>
                        {data.session ? (
                            <Link href="/dashboard">Dashboard</Link>
                        ) : (
                            <Link href="/login">Sing In</Link>
                        )}
                    </Button>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="block md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="block md:hidden">
                        <DropdownMenuItem className="focus:bg-transparent">
                            <Button
                                asChild
                                variant="link"
                                size="sm"
                                className="w-full text-secondary-foreground">
                                <Link href="#get-started">Get Started</Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-transparent">
                            <Button
                                asChild
                                variant="link"
                                size="sm"
                                className="w-full text-secondary-foreground">
                                <Link href="#features">Features</Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="focus:bg-transparent">
                            <Button
                                asChild
                                variant="link"
                                size="sm"
                                className="w-full text-secondary-foreground">
                                <Link href="#careers">Careers</Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="focus:bg-transparent">
                            <Button asChild className="w-full">
                                <Link href="/login">Sing In</Link>
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}

export default Navigation;
