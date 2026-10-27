import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sachini Poruwadanda - Script Writer Portfolio",
  description: "Professional Script Writer in Indonesia - Portfolio of Sachini Poruwadanda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
