import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Socially',
  description: 'The most powerful social media manager ever.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
