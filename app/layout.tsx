// Styles
import "./styles/globals.scss";
// Next
import type { Metadata } from "next";
// Components
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BtnTop } from "./components/BtnTop/BtnTop";
import { OrderModal } from "./components/UI/Modals/Order/OrderModal";
import { Toaster } from "react-hot-toast";
import { Loader } from "./components/Loader/Loader";
// Providers
import ThemeProvider from "@/providers/ThemeProvider";
import ModalProvider from "@/providers/ModalProvider";
import NextUiProvider from "@/providers/NextUiProvider";
// Font
import { Inter } from "next/font/google";
import { CookieModal } from "./components/UI/Modals/Cookie/CookieModal";

const font = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "WebPoster",
  description:
    "Effective websites and the best solutions for your business offered!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <meta
        name="google-site-verification"
        content="MqHzCAHKnBCfXtTVfEc8HaMyBmJCECpOcSf-kTLsOkA"
      />
      <body className="bg-white dark:bg-black">
        <div id="app" style={font.style}>
          <ThemeProvider>
            <NextUiProvider>
              <ModalProvider>
                <Header />
                <main>{children}</main>
                <Toaster position="top-center" />
                <Footer />
                <BtnTop />
                <OrderModal />
              </ModalProvider>
            </NextUiProvider>
            <Loader />
            <CookieModal />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
