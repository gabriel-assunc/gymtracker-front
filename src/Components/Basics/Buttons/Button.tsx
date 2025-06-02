import { ReactNode } from "react"
import { tv } from "tailwind-variants"


const buttonStyle = tv({
    base: "w-[211px] h-[61px] bg-foreground flex justify-center items-center text-white text-[32px]"
})

interface ButtonProps {
    children: ReactNode,
    displayClass?: string,
    onClick?: () => void,
}

const Button = ({ children, displayClass, onClick }: ButtonProps) => {
    return <div className={displayClass}>
        <button className={buttonStyle()} type="submit" onClick={onClick}>
            {children}
        </button>
    </div>
}

export default Button