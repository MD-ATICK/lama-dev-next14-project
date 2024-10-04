import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GrabHive - Best Online Store in Bangladesh for Unique Products',
  description: 'GrabHive offers a curated collection of stylish and innovative products across fashion, electronics, home goods, and more. Discover the best deals tailored for shoppers in Bangladesh.',
  keywords: 'GrabHive, grab hive, unique products Bangladesh, online shopping BD, fashion deals BD, electronics BD, home decor BD, exclusive deals Bangladesh, best online store BD',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'GrabHive - Best Online Store in Bangladesh',
    description: 'Explore GrabHive for a handpicked collection of trendy and high-quality products. Get exclusive deals on fashion, electronics, and home essentials, perfect for shoppers in Bangladesh.',
    url: 'https://grabhive.vercel.app',
    type: 'website',
    locale: 'en_BD',
    images: [
      {
        url: 'https://grabhive.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GrabHive - Trendy and Unique Products for Bangladesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrabHive - Best Online Store in Bangladesh',
    description: 'Find exclusive deals on a wide range of trendy and unique products for Bangladeshi shoppers. From fashion to home essentials, GrabHive has it all.',
    images: ['https://grabhive.vercel.app/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://grabhive.vercel.app',
    languages: {
      'en-BD': 'https://grabhive.vercel.app/bd',
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
      <head>
        <meta name="google-site-verification" content="6GmT2Do1lN7VtwEFDc82A70PsvPJHHw07NtB75FFIew" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
