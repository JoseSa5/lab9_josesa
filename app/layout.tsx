import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React & Next.js",
  description: "Lab 9",
};

async function obterAno() {
  "use cache";
  return new Date().getFullYear();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ano = await obterAno();

  return (
    <html lang="pt">
      <body className="flex flex-col justify-start gap-4 p-20 items-center min-h-screen">
        <header className="flex flex-col items-center">
          <h1>React & Next.js</h1>
        </header>
        <main className="bg-blue-200 p-5 rounded-2xl max-w-2xl min-h-[70vh] text-black">
          {children}
        </main>
        <footer>DIW {ano}</footer>
      </body>
    </html>
  );
}