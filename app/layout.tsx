import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <div className="min-h-screen max-w-5xl mx-auto px-6 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
