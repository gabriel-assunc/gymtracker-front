'use client'
import { useState } from "react"
import InputText from "./InputText"
import { IoEyeSharp } from "react-icons/io5"
import { FaEyeSlash } from "react-icons/fa6"

interface inputPasswordProps {
    label: string,
    className?: string,
    name: string,
    size?: 'large'
}

const InputPassword = ({ label, name, className, size, ...props }: inputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(true)

    const getType = () => {
        return showPassword ? 'password' : 'text'
    }

    return <div className={className}>
        <InputText type={getType()} name={name} label={label} size={size} {...props} />
        <div className="absolute w-[7%] h-full right-2 top-0" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeSharp className="w-full h-full" /> : <FaEyeSlash className="w-full h-full" />}
        </div>
    </div >
}

export default InputPassword