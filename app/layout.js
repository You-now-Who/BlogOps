import { Geist, Geist_Mono, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

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
  weight: "400",
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
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
