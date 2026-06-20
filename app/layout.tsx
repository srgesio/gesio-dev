import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Gésio de Moura | Engenheiro de Sistemas e Designer de Interfaces",
    template: "%s | Gésio de Moura",
  },
  description: "Portfólio de Gésio de Moura, engenheiro de sistemas e designer de interfaces especializado em construir produtos digitais de alta performance e polimento visual.",
  keywords: ["Gésio de Moura", "Engenheiro de Sistemas", "Designer de Interfaces", "Desenvolvedor Frontend", "UI/UX", "Next.js", "React", "Portfólio"],
  authors: [{ name: "Gésio de Moura" }],
  creator: "Gésio de Moura",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Gésio de Moura | Engenheiro de Sistemas e Designer de Interfaces",
    description: "Portfólio de Gésio de Moura, engenheiro de sistemas e designer de interfaces especializado em construir produtos digitais de alta performance e polimento visual.",
    siteName: "Gésio de Moura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gésio de Moura | Engenheiro de Sistemas e Designer de Interfaces",
    description: "Portfólio de Gésio de Moura, engenheiro de sistemas e designer de interfaces especializado em construir produtos digitais de alta performance e polimento visual.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen relative flex flex-col items-center w-full">
        <Header />
        <main className="mx-auto flex flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

