import { GeistSans } from 'geist/font/sans';
import { Pacifico } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';

const pacifico = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-pacifico',
});

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: {
        template: '%s | Worky',
        default: 'Worky',
    },
    description: 'Project management application',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${GeistSans.className} ${pacifico.variable} scroll-smooth`}>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem>
                    {children}
                </ThemeProvider>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
