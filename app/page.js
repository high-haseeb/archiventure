import Experience from "@/components/Experience";
import Image from "next/image"

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-hidden text-white bg-[#181818]">
            <Overlay />
            <Experience />
        </div>
    );
}

const Overlay = () => {
    return (
        <div className="fixed top-10 left-10 text-3xl z-50">
            <Image src={"/logo.png"} width={150} height={150} alt="logo" />
        </div>
    )
}
