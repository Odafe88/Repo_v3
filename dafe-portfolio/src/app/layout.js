import { Raleway, Noto_Sans_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const notoSans = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
  title: "Dafe Alaiya - Solutions Engineer",
  description: "Solutions Engineer | Building scalable enterprise solutions | Technical expertise meets business impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
