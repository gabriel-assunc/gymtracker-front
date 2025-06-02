import { tv } from "tailwind-variants"

const inputDisplay = tv({
    base: '',
    variants: {
        size: {
            large: 'w-[300px] h-[70px]'
        }
    },
    defaultVariants: {
        size: 'large'
    }
})

const inputStyle = tv({
    base: "h-full w-full border-b-2 border-b-slate-900 placeholder-gray-600 bg-slate-200 bg-opacity-40 outline-none p-2 text-2xl",
    variants: {
        error: {
            true: 'placeholder-error border-error bg-opacity-60',
            false: 'placeholder-black'
        }
    }
})

interface inputTextProps {
    label: string,
    className?: string,
    register?: any,
    error?: any,
    name: string,
    type?: string,
    size?: 'large'
}

const InputText = ({ label, type = 'text', name, className, size, register, error }: inputTextProps) => {
    return <div className={inputDisplay({ size, className })}>
        <input
            type={type}
            name={name}
            className={inputStyle({ error: !!error })}
            placeholder={label}
            {...register}
        />
        {error && <span className="text-xl">{error?.message}</span>}
    </div>
}

export default InputText