import Button from "../Basics/Buttons/Button"
import Form from "../Basics/Form/Form"
import InputPassword from "../Basics/Inputs/InputPassword"
import InputText from "../Basics/Inputs/InputText"
import ActionText from "../Basics/Text/ActionText"
import useHash from "@/Hooks/useHash"
import { useMutation } from "@tanstack/react-query"
import { USERS } from "@/API/URL"
import { post } from "@/API/fetch"
import { RegisterSchemaObject, RegisterUserType } from "@/Schema/Login/LoginSchema"

interface RegisterUserFormProps {
    toggleForm: () => void
}

const RegisterUserForm = ({ toggleForm }: RegisterUserFormProps) => {
    const { toHash } = useHash()

    const onSubmit = async (data: RegisterUserType) => {
        const { name, email, password } = data
        const hashedPassword = await toHash(password)
        const newUser = {
            name,
            email,
            password: hashedPassword
        }

        const { status } = await post(USERS, { ...newUser })
        console.log(status)
        if (status === 200) toggleForm()
    }

    const { mutate: addUser, isPending } = useMutation({
        mutationFn: (data: RegisterUserType) => onSubmit(data)
    })

    return isPending ? <h1>...pending</h1> : < Form
        className="flex flex-col items-center justify-start"
        formSchema={RegisterSchemaObject}
        onSubmit={addUser}
    >
        <div className="absolute top-[23px] text-[48px]"><h1>Register to Gym Tracker</h1></div>
        <InputText
            className="absolute top-[122px]"
            label={'Name'}
            name={"name"}
        />
        <InputText
            className="absolute top-[221px]"
            label={'E-mail'}
            name={"email"}
        />
        <InputPassword
            className="absolute top-[324px]"
            label={'Password'}
            name={"password"}
        />
        <InputPassword
            className="absolute top-[423px]"
            label={'Confirm Password'}
            name={"confirmPassword"}
        />
        <Button displayClass="absolute top-[552px]">Register</Button>
        <div className="absolute top-[622px]">Already have an account? <ActionText text={"Log In"} action={toggleForm} /></div>
    </Form >
}

export default RegisterUserForm