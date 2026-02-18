import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blog News",
    template: "%s | Blog News",
  },
  description: "Notícias do mundo da tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
