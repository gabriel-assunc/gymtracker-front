'use client'
import { createContext } from "react";
import useModal, { ContentType, ModalContextProps } from "./useModal";
import Modal from "./Modal";

interface ModalProviderProps {
    children: React.ReactNode
}
const modalContextDefault = {
    open: false,
    content: {} as ContentType,
    closeModal: () => { },
    handleModal: (content?: ContentType) => { content },
}
const ModalContext = createContext<ModalContextProps>(modalContextDefault)
const { Provider } = ModalContext

const ModalProvider = ({ children }: ModalProviderProps) => {
    const { open, content, closeModal, handleModal } = useModal()

    return (<Provider value={{ open, content, closeModal, handleModal }}>
        <Modal />
        {children}
    </Provider>)
}
export { ModalContext, ModalProvider }
