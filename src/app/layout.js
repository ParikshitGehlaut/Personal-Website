import { Asul } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transitionProvider/TransitionProvider";
const asul = Asul({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: {
    default: "ParikshitGehlaut.com",
    template: "%s | ParikshitGehlaut.com",
  },
  description:
    "Welcome to ParikshitGehlaut.com. I am beginner Full Stack developer. With a passion for creating stunning, functional websites, I'm here to bring your online vision to life. Contact me today to discuss your next project",
  robots: "index, follow",
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
      <body className={asul.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
