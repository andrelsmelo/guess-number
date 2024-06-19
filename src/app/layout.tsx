import type { Metadata } from "next";
import { Acme } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const acme = Acme({ weight: ["400"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "?",
  description: "Site de Adivinhação de Números",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={acme.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
