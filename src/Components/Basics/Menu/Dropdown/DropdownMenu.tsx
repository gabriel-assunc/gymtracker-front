'use client'
import { tv } from "tailwind-variants";
import { useState } from "react";

const ToggleProfileMenuStyle = tv({
    base: "absolute right-[2%] border-solid border-2 border-pink-200 w-fit",
})

type itemType = {
    label: string,
    onClick: () => void,
}

interface DropdownMenuProps {
    label: string;
    items: itemType[];
}

const DropdownMenu = ({ label, items }: DropdownMenuProps) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return <div className={ToggleProfileMenuStyle()}>
        <div onClick={() => setToggleMenu(!toggleMenu)}>{label}</div>
        {toggleMenu && <div className="absolute w-fit h-fit bg-white rounded-md shadow-lg z-10" onMouseLeave={() => setToggleMenu(false)}>
            {items?.map(({ label, onClick }) => {
                return <div onClick={onClick} key={label} className="p-2 hover:bg-slate-200 cursor-pointer" >{label}</div>
            })}
        </div>}
    </div>
}

export default DropdownMenu