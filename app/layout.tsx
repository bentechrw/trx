import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";

const teachersMono = Teachers({
  variable: "--font-teachers-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bentech Transactions",
  description: "A simple app to track your transactions built with Next.js and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${teachersMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
