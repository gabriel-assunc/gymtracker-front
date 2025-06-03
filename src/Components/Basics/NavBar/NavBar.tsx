import { tv } from "tailwind-variants";
import UserProfile from "../Profile/UserProfile";

const navBarStyle = tv({
    base: "flex flex-col justify-center w-full h-[8%] bg-primary",
})

const NavBar = () => {
    return <div className={navBarStyle()}>
        <UserProfile />
    </div>
}

export default NavBar;