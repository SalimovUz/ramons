import "./globals.css";
import favicon from "@/public/logo.jpg";

export const metadata = {
  title: "Ramons",
  description: "Created by Salimov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      </head>
      <body className="">{children}</body>
    </html>
  );
}
