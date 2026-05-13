import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gésio de Moura | Dev & Designer",
  description: "Portfolio profissional de Gésio de Moura, unindo desenvolvimento e design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} antialiased dark`}>
      <body className="bg-black text-white font-poppins">{children}</body>
    </html>
  );
}
