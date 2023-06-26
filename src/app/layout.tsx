import '@/feature/common/style/globals.scss';

import { RootStyleRegistry } from '@/config/ant-design';
import { DEFAULT_FONT } from '@/config/typography';

export const metadata = {
    title: 'Weather app',
    description: 'Weather app description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={DEFAULT_FONT.className}>
                <RootStyleRegistry>{children}</RootStyleRegistry>
            </body>
        </html>
    );
}
