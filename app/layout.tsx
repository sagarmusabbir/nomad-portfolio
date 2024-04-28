import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { ThemeModeScript } from 'flowbite-react';
import Header from './ui/dashboard/nav';
import { DefaultFooter } from './ui/dashboard/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>

      <body className={`${inter.className} antialiased  dark:bg-black`}>
        <Header />
        {children}
        <DefaultFooter />
      </body>
    </html>
  );
}
