import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/Components/Providers/Provider";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/Components/Providers/ReactQuery/getQueryClient";
import { ModalProvider } from "@/Components/Modal/ModalProvider";


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
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <div id="portal"> </div>
            <ModalProvider>
              {children}
            </ModalProvider>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
