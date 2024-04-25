import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from './ui/dashboard/nav';
import { ThemeModeScript } from 'flowbite-react';

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
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
