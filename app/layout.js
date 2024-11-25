import "./globals.css";

export const metadata = {
  title: "Zentry",
  description: "Discover the world's largest shared adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
