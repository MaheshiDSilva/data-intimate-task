import Image from "next/image";

export function Sidebar() {
    return (
            <div className="w-2/5 p-5 bg-yellow-500 rounded-tl-[5px] rounded-bl-[5px] relative dddl:hidden lg:block">
                <Image className="absolute bottom-0 right-0 m-auto"
                    src={'https://source.unsplash.com/Mv9hjnEUHR4/600x800'}
                    width={400}
                    height={500}
                    objectFit="cover"
                    alt="Picture of the author"/>
            </div>
    )
}