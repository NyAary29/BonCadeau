// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { GiftProvider } from '@/context/CartContext';
import Navbar from '@/components/NavBar';
import Stepper from '@/components/Stepper';
import { Playfair_Display, Open_Sans } from 'next/font/google';


const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans' });

export const metadata: Metadata = {
  title: '  Bons cadeaux',
  description: 'Offrez une expérience culinaire ou un séjour exceptionnel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="font-sans {inter.className}">
        <Navbar/>
        <Stepper/>
        <GiftProvider>
          <main>{children}</main>
          <Footer />
  
        </GiftProvider>
      </body>
    </html>
  );
}
