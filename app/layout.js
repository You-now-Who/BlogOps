import { Geist, Geist_Mono, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "400",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "300",
  subsets: ["latin"],
})  

export const metadata = {
  title: "Blogify",
  description: "A simple blog template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${playfairDisplay.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
