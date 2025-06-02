'use client'
import { useContext, useEffect } from "react"
import { tv } from "tailwind-variants"
import { IoClose } from "react-icons/io5";
import ReactDOM from "react-dom";
import Button from "../Basics/Buttons/Button";
import { ModalContext } from "./ModalProvider";


const modalOpacity = tv({
    base: 'z-10 bg-opacity-80 bg-gray-800 w-screen h-screen absolute top-0 bottom-0 left-0 right-0'
})

const modalFrame = tv({
    base: 'h-3/4 w-3/4 rounded bg-zinc-100 bg-opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'
})

const titleStyle = tv({
    base: 'h-1/6 w-full border-b-2 border-zinc-800'
})

const closeButtonStyle = tv({
    base: 'absolute right-4 top-4 rounded-full z-10'
})

const Modal = () => {
    const { content, open, closeModal } = useContext(ModalContext)
    useEffect(() => { console.log(open) }, [open])

    return open && ReactDOM.createPortal(
        <div className={modalOpacity()}>
            <div className={modalFrame()}>
                {content?.title && <div className={titleStyle()}><h1 className="text-4xl h-full flex flex-col items-center justify-center">{content?.title}</h1></div>}
                <Button onClick={closeModal} displayClass={closeButtonStyle()}> <IoClose size={35} /> </Button>
                {content?.content}
            </div>
        </div>, document.getElementById('portal')!)
}

export default Modal