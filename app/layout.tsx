import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Enigma Nature – GenAI & Cloud',
  description: 'Vishal’s nature-inspired corner for GenAI and Cloud explorations.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}