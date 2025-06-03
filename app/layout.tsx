import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/Components/Providers/Provider";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/Components/Providers/ReactQuery/getQueryClient";
import { ModalProvider } from "@/Components/Basics/Modal/ModalProvider";


export const metadata: Metadata = {
  title: "Fit Tracker",
  description: "Track your fit progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient()
  return (
    <html lang="pt-br">
      <body>
        <div className="h-screen flex justify-center border-2 border-red-300">
          <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <div id="portal"> </div>
              <ModalProvider>
                {children}
              </ModalProvider>
            </HydrationBoundary>
          </Providers>
        </div>
      </body>
    </html>
  );
}
