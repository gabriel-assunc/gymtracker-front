"use client"
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react"
import getQueryClient from "./getQueryClient";

interface ReactQueryProviderProps {
    children: ReactNode;
}

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
    const queryClient = getQueryClient();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider