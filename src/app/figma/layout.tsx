import { ThemeProvider } from "@/components/figma/ThemeProvider";
import styles from './figma.module.css';

export const metadata = {
  title: 'CanPixel',
  description: 'Portfolio Lair',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={styles['figma-page']}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}