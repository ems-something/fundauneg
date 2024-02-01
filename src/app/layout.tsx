import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fundauneg",
  description: "Fundauneg landing page app",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
