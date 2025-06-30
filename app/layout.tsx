import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShuttleX App: The SpaceX Spacecraft Encyclopedia",
  description: "Explore the SpaceX spacecraft with Shuttlex, your ultimate encyclopedia for all things SpaceX. Discover detailed information about each spacecraft, including specifications, missions, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
