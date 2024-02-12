import {Sidebar} from "./componant/Sidebar";
import {LoginPage} from "./componant/LoginPage";


export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#4e73df]">
            <div className=" img bg-white rounded-[5px] shadow-2xl flex w-[75%]">
            <Sidebar/>
            <LoginPage/>
            </div>
        </main>

    )
}
