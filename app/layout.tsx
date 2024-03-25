import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Question Time",
  description: "Taking questions Improving service..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={`${roboto.className} bg-gradient-to-r from-blue-100 from-10% via-gray via-30% to-sky-100 to-90%`}>
            {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
