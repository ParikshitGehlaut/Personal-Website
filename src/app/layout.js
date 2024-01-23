import { Asul } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const asul = Asul({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
        <meta name="robots" content="index, follow"></meta>
      </head>
      <body className={asul.className}>
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
