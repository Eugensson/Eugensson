import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import './globals.css';

import { Roboto, Raleway } from "next/font/google";
const roboto = Roboto({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});
const raleway = Raleway({
  subsets: ["cyrillic"],
  variable: "--font-raleway",
  weight: ["400", "500", "700", "900"],
});

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Web-studio Pegasus',
  description: 'Web-studio Pegasus',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main>{children}</main>        
        <Footer />
      </body>
    </html>
  )
}