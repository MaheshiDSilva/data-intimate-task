import {FaFacebookF, FaGoogle} from "react-icons/fa";

export function LoginPage() {
    return (
            <div className="text-black rounded-tr-[5px] rounded-br-[5px] lg:my-10 w-3/5 text-center dddl:mx-auto">
                <h1 className="font-sans text-2xl text-[#3a3b45]">Create an Account!</h1>

                <form action="">
                    <div className="flex justify-between sm:flex-row mt-5 font-sans font-light text-sm w-full px-5 dddl:flex-col">
                        <input type="text" placeholder="First Name"
                               className="flex justify-between border-[1.5px] rounded-3xl border-gray-300 p-3 sm:w-[47%] dddl:mx-auto dddl:w-full
                                   focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-200 dddl:mb-3 sm:m-0"/>
                        <input type="text" placeholder="Last Name"
                               className="flex justify-between border-[1.5px] rounded-3xl border-gray-300 p-3 sm:w-[47%] dddl:w-full dddl:mx-auto
                                 focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-200"/>
                    </div>
                    <div className="flex justify-between sm:flex-row mt-5 font-sans font-light text-sm w-full px-5 dddl:flex-col">
                        <input type="email" placeholder="Email Address"
                               className="border-[1.5px] rounded-3xl border-gray-300 p-3 flex flex-col pr-5 w-full dddl:mx-auto
                                 focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-200"/>
                    </div>
                    <div className="flex justify-between sm:flex-row mt-5 font-sans font-light text-sm w-full px-5 dddl:flex-col">
                        <input type="text" placeholder="Password"
                               className="flex justify-between border-[1.5px] rounded-3xl border-gray-300 p-3 sm:w-[47%] dddl:w-full dddl:mx-auto
                                 focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-200 dddl:mb-3 sm:m-0"/>
                        <input type="text" placeholder="Repeat Password"
                               className="flex justify-between border-[1.5px] rounded-3xl border-gray-300 p-3 sm:w-[47%] dddl:w-full dddl:mx-auto
                                 focus:outline-none focus:ring-4 focus:ring-offset-inherit  focus:ring-indigo-200"/>
                    </div>

                </form>
                <div className="flex items-center mt-3 text-sm w-full px-5 ">
                    <button
                        className=" rounded-3xl border-2 border-[#4e73df] p-2 w-full pr-5 bg-[#4e73df] text-white font-sans text-center">Register
                        Account
                    </button>
                </div>
                <div >
                    <hr className="bg-gray-300 h-[1.1px] w-[90%] my-4 mx-6 "/>
                </div>
                <div className="flex items-center mt-3 text-sm w-full px-5 ">
                    <button
                        className=" flex items-center justify-center border-2 rounded-3xl border-[#ea4335] p-2 w-full pr-5 bg-[#ea4335] text-white font-sans ">
                        <FaGoogle className="logo"/>Register
                        with Google
                    </button>
                </div>
                <div className="flex items-center mt-2 text-sm w-full px-5 ">
                    <button
                        className=" flex items-center justify-center border-2 rounded-3xl border-[#3b5998] p-2 w-full pr-5 bg-[#3b5998] text-white font-sans">
                        <FaFacebookF className="logo"/>Register
                        with Facebook
                    </button>
                </div>
                <div>
                    <hr className="bg-black h-[0.8] w-[90%] my-4 mx-6 "/>
                </div>
                <div className="mt-4 text-sm text-[#4e73df] font-sans">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="mt-1 text-sm text-[#4e73df] font-sans">
                    <a href="#">Already have an account? Login!</a>
                </div>
            </div>
    )
}