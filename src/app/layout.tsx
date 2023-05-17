import "@styles/globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Khant Min | Web Developer",
  description: "Software Engineer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
