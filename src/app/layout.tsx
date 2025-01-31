import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";
import ClerkProviderWrapper from "@/providers/ClerkProvider";

import { SWRConfig } from "swr";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Social",
  description: "A modern social media application powered by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProviderWrapper>
          {" "}
          {/* 👈 ห่อทุกอย่างแทนการอยู่ข้างใน ThemeProvider */}
          <SWRConfig value={{ revalidateOnMount: false }}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="min-h-screen">
                <Navbar />
                <main className="py-8">
                  <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="hidden lg:block lg:col-span-3">
                        <Sidebar />
                      </div>
                      <div className="lg:col-span-9">{children}</div>
                    </div>
                  </div>
                </main>
              </div>
              <Toaster />
            </ThemeProvider>
          </SWRConfig>
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
