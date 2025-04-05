import { Geist, Geist_Mono, Poppins, Playfair_Display } from "next/font/google";
import "./../../globals.css";

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
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogify",
  description: "A simple blog template",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any head elements specific to this layout if needed */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${poppins.variable}`}>
        <div className="login-layout">
          {children}
        </div>
      </body>
    </html>
  );
}
