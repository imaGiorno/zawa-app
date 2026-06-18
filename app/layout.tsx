import Script from "next/script";
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
  description: "通常の文章をざわ構文に変換する非公式ツール",

  openGraph: {
    title: "ざわ構文変換アプリ",
    description: "通常の文章をざわ構文に変換する非公式ツール",
    url: "https://zawa-app.vercel.app",
    siteName: "ざわ構文変換アプリ",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ざわ構文変換アプリ",
    description: "通常の文章をざわ構文に変換する非公式ツール",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2124144886346829"
     crossorigin="anonymous"></script>

      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}