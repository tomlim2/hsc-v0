import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Serif, Alegreya, EB_Garamond } from "next/font/google";

// Import the font
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const alegreyaSerif = Alegreya({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const combinedClassName = `${ibmPlexSerif.className} ${alegreyaSerif.className} ${ebGaramond.className}`;

export const metadata: Metadata = {
  title: "HSC",
  description: "HSC",
  generator: "React 18.2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={combinedClassName}>
      <head>
        <link rel="icon" href="/hsv/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/hsc/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
