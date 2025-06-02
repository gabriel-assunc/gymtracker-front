'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { tv } from "tailwind-variants"
import { z, ZodType } from "zod"

const formDisplay = tv({
    base: "w-full h-full flex flex-col items-center justify-start"
})

interface FormProps {
    formData?: {},
    onSubmit: (data: any) => void,
    children: React.ReactNode,
    className?: string,
    formSchema: ZodType
}

const Form = ({ formData, formSchema, className, onSubmit, children }: FormProps) => {
    type formType = z.infer<typeof formSchema>
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formType>({
        resolver: zodResolver(formSchema),
        defaultValues: formData
    })

    return <form className={formDisplay({ className })} onSubmit={handleSubmit((data) => onSubmit(data))}>
        {React?.Children?.toArray(children)
            .map((child: any) => {
                const useFormProps = (!!child.props.name && child.props.name !== 'reset') ? {
                    register: register(child.props.name),
                    error: errors[child.props.name],
                } : {}

                return React.cloneElement(child, {
                    ...child.props,
                    ...useFormProps,
                })
            })}
    </form>
}

export default Form