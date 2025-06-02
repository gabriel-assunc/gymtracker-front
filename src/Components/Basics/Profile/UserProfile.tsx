'use client'
import { redirect } from "next/navigation";
import DropdownMenu from "../Menu/Dropdown/DropdownMenu";
import deleteSession from "@/Hooks/deleteSession";
import { useContext } from "react";
import { ModalContext } from "@/Components/Modal/ModalProvider";

const UserProfile = () => {
    const { handleModal } = useContext(ModalContext)
    const items = [{
        label: "Profile",
        onClick: () => {
            return handleModal({
                title: "Profile",
                content: <div>Profile</div>
            })
        },
    }, {
        label: "Log Out",
        onClick: async () => {
            await deleteSession();
            redirect("/login");
        },
    }]
    return <DropdownMenu label="User Profile" items={items} />
}

export default UserProfile;