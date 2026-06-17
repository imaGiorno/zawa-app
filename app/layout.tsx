import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ざわ構文変換アプリ",
  description: "ざわ構文を自動生成",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<html lang="ja">
  <head>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-W2MPK2C65P"
    />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-W2MPK2C65P');
      `}
    </Script>
  </head>

  <body>
    {children}
  </body>
</html>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
