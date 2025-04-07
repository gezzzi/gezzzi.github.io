import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gezzzi Portfolio",
  description: "Gezzziのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
        <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <nav>
              <ul className="flex space-x-8 justify-center md:justify-end">
                <li><Link href="/" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ホーム</Link></li>
                <li><Link href="/about" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">自己紹介</Link></li>
                <li><Link href="/projects" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">プロジェクト</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8 flex-grow">{children}</main>
        <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Gezzzi</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
