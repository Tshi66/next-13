import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next 13 App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className={inter.className}>
        <header>
          <h1>
            <Link href="/">ブログ</Link>
          </h1>
          <Link href="/articles/new">記事を書く</Link>
        </header>
        <main>
          <Suspense fallback={<Loading />}>
            {/* children には page.tsx のコンテンツが挿入される */}
            {children}
          </Suspense>
        </main>
        <footer>
          <small>© 2023 Tshi66</small>
        </footer>
      </body>
    </html>
  );
}
