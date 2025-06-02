import { z } from "zod";

export const LoginSchemaObject = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long")
})

export const RegisterSchemaObject = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
})

export type LoginType = z.infer<typeof LoginSchemaObject>;
export type RegisterUserType = z.infer<typeof RegisterSchemaObject>;