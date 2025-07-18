import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";

// Load Poppins font with CSS variable
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can add more weights if needed
  variable: "--font-poppins",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}   `}
      >
        <Header />
        <main>{children}</main>
        <BannerSection/>
        <Footer />
      </body>
    </html>
  );
}
