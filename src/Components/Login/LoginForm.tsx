import Button from "../Basics/Buttons/Button"
import Form from "../Basics/Form/Form"
import InputPassword from "../Basics/Inputs/InputPassword"
import InputText from "../Basics/Inputs/InputText"
import ActionText from "../Basics/Text/ActionText"
import createSession from "@/Hooks/createSession"
import { redirect } from "next/navigation"
import { LOGIN_USER } from "@/API/URL"
import { post } from "@/API/fetch"
import { LoginSchemaObject, LoginType } from "@/Schema/Login/LoginSchema"

interface LoginFormProps {
    toggleForm: () => void
}

const LoginForm = ({ toggleForm }: LoginFormProps) => {
    const onSubmit = async (data: LoginType) => {
        const { email, password } = data

        const { body: { jwt } } = await post(LOGIN_USER, {
            email,
            password
        })

        if (jwt) {
            createSession(jwt)
                .catch((err) => console.log(err))
                .then(() => {
                    redirect('/projects')
                })
        }
    }

    return <Form
        className="flex flex-col items-center justify-start"
        onSubmit={onSubmit}
        formSchema={LoginSchemaObject}
    >
        <div className="absolute top-[51px] text-[48px]"><h1>Gym Tracker</h1></div>
        <InputText
            className="absolute top-[201px]"
            label={'Login'}
            name={"email"}
        />
        <InputPassword
            className="absolute top-[341px]"
            label={'Password'}
            name={"password"}
        />
        <Button displayClass="absolute top-[497px]">Log In</Button>
        <div className="absolute top-[561px]">Don't have an account? <ActionText text={"Register"} action={toggleForm} /></div>
    </Form>
}

export default LoginForm