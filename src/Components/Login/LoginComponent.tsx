"use client"
import { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterUserForm from "./RegisterUserForm"

export const LoginComponent = () => {
    const [toLoginForm, setToLoginForm] = useState(true)

    const toggleForm = () => setToLoginForm(!toLoginForm)

    return <div className="bg-primary rounded-[5px] w-[533px] h-[690px] top-[136px] relative">
        {toLoginForm ? <LoginForm toggleForm={toggleForm} /> : <RegisterUserForm toggleForm={toggleForm} />}
    </div>
}