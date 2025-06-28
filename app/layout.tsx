import "./globals.css";
import "../styles/custom.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Standard favicon (ICO format) */}
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />

        {/* PNG favicons (modern browsers) */}
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon_io/favicon-96x96.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png?v=2" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png?v=2" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>KlikkFix</title>
      </head>
      <body className="bg-gradient-to-br from-black via-[#1a102a] to-purple-800 min-h-screen pt-20 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
