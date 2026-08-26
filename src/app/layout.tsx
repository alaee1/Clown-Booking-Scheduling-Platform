import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-outfit',
});

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Chuckles the Clown - Book Your Fun Event!',
    description: 'Professional clown entertainment for parties, events, and special occasions.',
    viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
            <body className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-700 font-sans antialiased">
                {children}
            </body>
        </html>
    );
}