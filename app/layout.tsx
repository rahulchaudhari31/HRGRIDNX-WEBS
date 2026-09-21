import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import SiteNavbar from "./components/site-navbar";
import SiteOverlays from "./components/site-overlays";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HRGRIDNX | People operations, finally in sync.",
  description:
    "HRGRIDNX brings hiring, employee records, attendance, leave, payroll, teams and self-service into one connected grid.",
  metadataBase: new URL("https://hrgridnx.example"),
  openGraph: {
    title: "HRGRIDNX | People operations, finally in sync.",
    description: "One connected grid for hiring, people, time, pay and everything in between.",
    type: "website",
    siteName: "HRGRIDNX",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: { card: "summary_large_image", title: "HRGRIDNX", description: "People operations, finally in sync." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col"><SiteNavbar />{children}<SiteOverlays /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "HRGRIDNX", url: "https://hrgridnx.example", description: "Connected people operations for growing teams." }) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "What is HRGRIDNX?", acceptedAnswer: { "@type": "Answer", text: "HRGRIDNX is an all-in-one people operations platform for hiring, records, attendance, leave, payroll, goals and self-service." } }, { "@type": "Question", name: "Can employees use HRGRIDNX themselves?", acceptedAnswer: { "@type": "Answer", text: "People can update their details, request leave, find payslips and follow onboarding without another email to HR." } }] }) }} /></body>
    </html>
  );
}
