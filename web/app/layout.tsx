import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider";
import AmplifyProvider from "@/providers/amplify";
import { Amplify } from "aws-amplify";
import config from "@/amplify-config.json";
import { fetchAuthSession } from "aws-amplify/auth/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DetoxiTube",
  description: "Make YouTube distraction free",
};

console.log("on server");
// Amplify.configure(config as any, { ssr: true });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AmplifyProvider>
            {/* <Navbar /> */}
            {children}
          </AmplifyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
