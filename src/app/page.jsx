
import Image from 'next/image'
// import img from '../../public/dog.jpg'
import Head from "next/head";
import { FaGoogle } from "react-icons/fa";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#4e73df]">

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-[5px] shadow-2xl flex w-[75%] h-[35rem]">
                    <div className="w-2/5 p-5 bg-yellow-500 rounded-tl-[5px] rounded-bl-[5px] ">
                        <Image
                            src={'https://source.unsplash.com/Mv9hjnEUHR4/600x800'}
                            width={700}
                            height={1200}
                            objectFit="cover"
                            alt="Picture of the author"

                        />
                    </div>

                    <div className="w-3/5 text-black rounded-tr-[5px] rounded-br-[5px] py-10 px-12 text-center">
                        <h1 className="font-sans text-2xl text-[#3a3b45]">Create an Account!</h1>

                        <form action="">
                        <div className="flex items-center justify-between flex-wrap mt-5 font-sans font-light text-sm max-w-[100%]">
                            <input type="text" placeholder="First Name" className="border-[1.5px] rounded-3xl border-gray-300 p-3 pr-2 w-[50%] "/>
                            <input type="text" placeholder="Last Name" className="border-[1.5px] rounded-3xl border-gray-300 p-3 w-[50%] "/>
                        </div>
                        <div className="flex items-center mt-4 mb-4 font-sans font-light text-sm">
                            <input type="email" placeholder="Email Address"
                                   className="border-[1.5px] rounded-3xl border-gray-300 p-3 w-[100%] pr-5"/>
                        </div>
                        <div className="flex items-center justify-between flex-wrap mb-4 font-sans font-light text-sm max-w-[100%]">
                            <input type="text" placeholder="Password" className="border-[1.5px] rounded-3xl border-gray-300 p-3 pr-2 w-[50%] "/>
                            <input type="text" placeholder="Repeat Password" className="border-[1.5px] rounded-3xl border-gray-300 p-3 w-[50%]"/>
                        </div>

                        </form>
                        <div className="flex items-center mt-3 text-sm">
                            <button
                                className=" rounded-3xl border-2 border-[#4e73df] p-2 w-[100%] pr-5 bg-[#4e73df] text-white font-sans text-center">Register
                                Account
                            </button>
                        </div>
                        <div>
                            <hr className="bg-gray-300 h-[1.1px] w-[100%] mt-4 mb-4"/>
                        </div>
                        <div className="flex items-center mt-3 text-sm ">
                            <button
                                className="border-2 rounded-3xl border-[#ea4335] p-2 w-[100%] pr-5 bg-[#ea4335] text-white font-sans">Register
                                with Google
                            </button>
                        </div>
                        <div className="flex items-center mt-2 text-sm">
                            <button
                                className="border-2 rounded-3xl border-[#3b5998] p-2 w-[100%] pr-5 bg-[#3b5998] text-white font-sans">Register
                                with Facebook
                            </button>
                        </div>
                        <div>
                            <hr className="bg-black h-[0.8] w-[100%] mt-4"/>
                        </div>
                        <div className="mt-4 text-sm text-[#4e73df] font-sans">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className="mt-1 text-sm text-[#4e73df] font-sans">
                            <a href="#">Already have an account? Login!</a>
                        </div>
                    </div>
                </div>
            </main>

        </div>

    )
}
