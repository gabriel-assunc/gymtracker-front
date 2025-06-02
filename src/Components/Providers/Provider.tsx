import { ReactNode } from "react"
import ReactQueryProvider from "./ReactQuery/ReactQueryProvider"

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    return <ReactQueryProvider>
        {children}
    </ReactQueryProvider>
}

export default Providers