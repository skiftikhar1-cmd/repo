import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SK Ahosanullah | Developer Portfolio",
  description: "Portfolio of SK Ahosanullah — Computer Science & Technology student and aspiring software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}