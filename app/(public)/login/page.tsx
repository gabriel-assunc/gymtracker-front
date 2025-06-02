import { LoginComponent } from "@/Components/Login/LoginComponent";

const Page = () => {
  return <div className="h-screen flex justify-center">
    <div className="bg-primary rounded-[5px] w-[533px] h-[690px] top-[136px] relative">
      <LoginComponent />
    </div>
  </div>
}

export default Page;