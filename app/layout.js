import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AIM Oilfield Services | Liquid Measurement Solutions",
  description:
    "AIM Oilfield Services is a Liquid Measurement services contractor focused on the U.S. Upstream, Midstream and Refined Products market segments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
