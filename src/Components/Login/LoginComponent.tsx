"use client"
import { useState } from "react"
import LoginForm from "./LoginForm"
import RegisterUserForm from "./RegisterUserForm"

export const LoginComponent = () => {
    const [toLoginForm, setToLoginForm] = useState(true)

    const toggleForm = () => setToLoginForm(!toLoginForm)

    return toLoginForm ? <LoginForm toggleForm={toggleForm} /> : <RegisterUserForm toggleForm={toggleForm} />
}