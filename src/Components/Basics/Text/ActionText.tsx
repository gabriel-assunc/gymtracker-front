import { tv } from "tailwind-variants"

const actionTextStyle = tv({
    base: 'text-blue-500 cursor-pointer'
})

interface ActionTextProps {
    text: string,
    action: () => void
}

const ActionText = ({ text, action }: ActionTextProps) => {
    return <b className={actionTextStyle()} onClick={action}>{text}</b>
}

export default ActionText