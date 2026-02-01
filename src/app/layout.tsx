import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nicknamegeneratorforgames.top"),
  title: {
    default: "Free AI Nickname Generator for Games - Cool Gaming Names & Usernames",
    template: "%s | Free Nickname Generator",
  },
  description: "100% Free AI-powered nickname generator for games, boyfriend, girlfriend & more. Generate unlimited cool, cute & funny nicknames instantly. No signup required!",
  keywords: "free nickname generator, free gaming nickname generator, nickname generator for games, nicknames for boyfriend, nicknames for girlfriend, cute nicknames, cool nicknames, funny nicknames, AI nickname generator, game username generator, free username generator",
  authors: [{ name: "Nickname Generator for Games" }],
  creator: "Nickname Generator for Games",
  publisher: "Nickname Generator for Games",
  openGraph: {
    title: "Free AI Nickname Generator for Games - Generate Cool Names Instantly",
    description: "100% Free AI-powered nickname generator. Create unlimited unique nicknames for gaming, relationships & more. No signup, no limits!",
    type: "website",
    locale: "en_US",
    url: "https://nicknamegeneratorforgames.top",
    siteName: "Nickname Generator for Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Nickname Generator for Games",
    description: "Generate unlimited free nicknames with AI. Cool gaming names, cute pet names & more!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nicknamegeneratorforgames.top",
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Background gradient mesh */}
        <div
          className="fixed inset-0 bg-mesh-gradient pointer-events-none"
          aria-hidden="true"
          style={{
            background: `
              radial-gradient(at 40% 20%, hsla(280, 100%, 50%, 0.12) 0px, transparent 50%),
              radial-gradient(at 80% 0%, hsla(189, 100%, 50%, 0.08) 0px, transparent 50%),
              radial-gradient(at 0% 50%, hsla(330, 100%, 50%, 0.08) 0px, transparent 50%),
              radial-gradient(at 80% 80%, hsla(240, 100%, 50%, 0.08) 0px, transparent 50%),
              radial-gradient(at 0% 100%, hsla(280, 100%, 50%, 0.08) 0px, transparent 50%)
            `
          }}
        />

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
