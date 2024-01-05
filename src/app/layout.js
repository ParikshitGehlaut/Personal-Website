import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Parikshit | Portfolio",
    template: "%s | Parikshit",
  },
  description:
    "Welcome to Parikshit Gehlaut's Portfolio.I am beginner Full Stack developer.With a passion for creating stunning, functional websites, I'm here to bring your online vision to life. Contact me today to discuss your next project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="fzo1OSEJ39iT3DzacFMoPBj6BCVK0w_6kV_ts7EJlv4"
        />
      </head>
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