import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header, Footer } from "../components/layout";
import { fetchGlobals } from "../lib/directus/fetchers";
import { getDirectusAssetURL } from "../lib/directus/directus-utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const globals = await fetchGlobals();
    
    return {
      title: (globals?.title as string),
      description: (globals?.description as string),
      icons: globals?.favicon ? {
        icon: getDirectusAssetURL(globals?.favicon) as string,
        shortcut: getDirectusAssetURL(globals?.favicon) as string,
        apple: getDirectusAssetURL(globals?.favicon) as string,
      } : undefined,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: "Travel Social - Mạng Xã Hội Du Lịch Toàn Cầu",
      description: "Khám phá những điểm đến tuyệt vời, chia sẻ trải nghiệm du lịch và kết nối với cộng đồng những người yêu thích du lịch trên toàn thế giới.",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch globals data for Header and Footer
  let globals;
  try {
    globals = await fetchGlobals();
  } catch (error) {
    console.error('Error fetching globals in layout:', error);
    globals = null;
  }

  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header 
          logo={globals?.logo}
          subLogo={globals?.sub_logo}
          siteTitle={globals?.title}
        />
        <div className="mt-32 w-full">
          {children}
        </div>
        <Footer 
          subLogo={globals?.sub_logo}
          siteTitle={globals?.title}
        />
      </body>
    </html>
  );
}
