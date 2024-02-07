// import Image from 'next/image'
// import style from './styles/page.module.css'
// import image from '../../public/dog.jpg'
import Head from "next/head";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-[5px] shadow-2xl flex w-[75%] h-[40rem]">
                    <div className="w-2/5 p-5 bg-green-400 rounded-tl-[5px] rounded-bl-[5px]">
                        <h1>image section</h1>
                    </div>

                    <div className="w-3/5 text-black rounded-tr-[5px] rounded-br-[5px] py-10 px-12 text-center">
                        <h1>Create an Account!</h1>
                        <div className="flex items-center justify-between  mt-5">
                            <input type="text" placeholder="First Name" className="border-2 rounded-3xl p-2 pr-2 "/>
                            <input type="text" placeholder="Last Name" className="border-2 rounded-3xl p-2 "/>
                        </div>
                        <div className="flex items-center mt-3 ">
                            <input type="email" placeholder="Email Address"
                                   className="border-2 rounded-3xl p-2 w-[100%] pr-5"/>
                        </div>
                        <div className="flex items-center justify-between  mt-5">
                            <input type="text" placeholder="Password" className="border-2 rounded-3xl p-2 pr-2 "/>
                            <input type="text" placeholder="Repeat Password" className="border-2 rounded-3xl p-2 "/>
                        </div>
                        <div className="flex items-center mt-3 ">
                            <button className="border-2 rounded-3xl p-1 w-[100%] pr-5 bg-blue-500 text-white font-sans text-center">Register
                                Account
                            </button>
                        </div>
                        <div>
                            <hr className="bg-black h-[0.8] w-[100%] mt-3"/>
                        </div>
                        <div className="flex items-center mt-3 ">
                            <button className="border-2 rounded-3xl p-1 w-[100%] pr-5 bg-red-500 text-white font-sans">Register
                                with Google
                            </button>
                        </div>
                        <div className="flex items-center mt-2 ">
                            <button className="border-2 rounded-3xl p-1 w-[100%] pr-5 bg-blue-600 text-white font-sans">Register
                                with Facebook
                            </button>
                        </div>
                        <div>
                            <hr className="bg-black h-[0.8] w-[100%] mt-3"/>
                        </div>
                    </div>
                </div>
            </main>

        </div>
        // <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen py-2 ">
        //
        //     <div className="bg-blue-400 rounded-2xl flex w-2/3 max-w-4xl">
        //
        //         <div className="w-2/6 p-5">
        //             <h1>image section</h1>
        //         </div>
        //
        //         <div className="bg-green-500 w-4/6 text-white rounded-tr-2xl rounded-br-2xl">
        //             <h1>sign up section</h1>
        //         </div>
        //     </div>
        // </main>
    )
}
