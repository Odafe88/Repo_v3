import "./globals.css";
import { Header, Footer } from "@/components";


export const metadata = {
  title: "Dafe's Portfolio Site",
  description: "Web Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body> 
    </html>
  );
}
