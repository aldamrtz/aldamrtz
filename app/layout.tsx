import "./globals.css";

export const metadata = {
  title: "Alda's Portfolio",
  icons: {
    icon: "/A.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
