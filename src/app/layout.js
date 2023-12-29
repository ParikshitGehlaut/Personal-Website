import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parikshit | Portfolio",
  description:
    "Welcome to Parikshit Gehlaut's Portfolio | Freelance Web Developer and Designer.With a passion for creating stunning, functional websites, I'm here to bring your online vision to life. Contact me today to discuss your next project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <header>
            <Navbar />
          </header>
          <div className="wrapper">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
