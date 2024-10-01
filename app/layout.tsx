import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LuxoraStore by Atick - Best Online Store in Bangladesh for Unique Products',
  description: 'LuxoraStore by Atick offers a curated collection of stylish and innovative products across fashion, electronics, home goods, and more. Discover the best deals tailored for shoppers in Bangladesh.',
  keywords: 'LuxoraStore by Atick, unique products Bangladesh, online shopping BD, fashion deals BD, electronics BD, home decor BD, exclusive deals Bangladesh, best online store BD',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'LuxoraStore by Atick - Best Online Store in Bangladesh',
    description: 'Explore LuxoraStore by Atick for a handpicked collection of trendy and high-quality products. Get exclusive deals on fashion, electronics, and home essentials, perfect for shoppers in Bangladesh.',
    url: 'https://luxorastorebyatick.vercel.app',
    type: 'website',
    locale: 'en_BD',
    images: [
      {
        url: 'https://luxorastorebyatick.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LuxoraStore by Atick - Trendy and Unique Products for Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxoraStore by Atick - Best Online Store in Bangladesh',
    description: 'Find exclusive deals on a wide range of trendy and unique products for Bangladeshi shoppers. From fashion to home essentials, LuxoraStore by Atick has it all.',
    images: ['https://luxorastorebyatick.vercel.app/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://luxorastorebyatick.vercel.app',
    languages: {
      'en-BD': 'https://luxorastorebyatick.vercel.app/bd',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
