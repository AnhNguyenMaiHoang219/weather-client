import { RootStyleRegistry } from '@/config/antd';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Weather App',
    description: 'Weather App description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RootStyleRegistry>{children}</RootStyleRegistry>
            </body>
        </html>
    );
}
