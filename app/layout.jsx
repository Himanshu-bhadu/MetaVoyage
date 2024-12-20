import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MetaVoyage",
  description: "Next Gen Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  );
}
