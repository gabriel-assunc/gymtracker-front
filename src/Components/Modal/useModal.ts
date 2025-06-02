import { ReactNode, useState } from "react";

export interface ContentType {
    title?: string;
    content?: ReactNode;
}

export interface ModalContextProps {
    open: boolean;
    content?: ContentType;
    closeModal: () => void;
    handleModal: (content?: ContentType) => void;
}

const useModal = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState<ContentType>({});

    const closeModal = () => {
        setOpen(false);
    }

    const handleModal = (content?: ContentType) => {
        setOpen(true);
        if (!!content) setContent(content);
    }

    return { open, closeModal, handleModal, content }
}

export default useModal;