import { isServer, QueryClient } from "@tanstack/react-query"

type BrowserQueryClient = QueryClient | undefined;

function createQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            }
        }
    })
}

let browserQueryClient: BrowserQueryClient = undefined

const getQueryClient = () => {
    if (!isServer) {
        if (!browserQueryClient) browserQueryClient = createQueryClient()
        return browserQueryClient;
    }
    return createQueryClient()
}

export default getQueryClient