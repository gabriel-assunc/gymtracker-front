import { tv } from "tailwind-variants";
import UserProfile from "../Profile/UserProfile";

const navBarStyle = tv({
    base: "flex flex-col justify-center w-full h-[8%] border-solid border-2 border-yellow-500",
})

const NavBar = () => {
    return <div className={navBarStyle()}>
        <UserProfile />
    </div>
}

export default NavBar;