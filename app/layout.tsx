import type { Metadata } from "next";
import "./globals.css";
import {
  EB_Garamond,
  Gothic_A1,
  Public_Sans,
  Roboto_Condensed,
} from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const gothicA1Bold = Gothic_A1({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const publicSansBold = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const robotoCondensed400 = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const robotoCondensed700 = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const combinedClassName = `${robotoCondensed400.className} ${robotoCondensed700.className} ${publicSansBold.className} ${publicSans.className} ${ebGaramond.className} ${gothicA1.className} ${gothicA1Bold.className}`;

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
