import Experience from "@/components/Experience";
import Image from "next/image"

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-hidden text-white bg-[#181818]">
            <Overlay />
            <Experience />
            <div className="absolute left-1/2 -translate-x-1/2 top-10 z-50 text-sm lg:text-3xl text-orange-300 font-black">Portfolio Display</div>
            <div className="absolute right-4 bottom-4 z-50 text-xs lg:text-sm text-white font-light">Copyright (c) 2024 Huzaifa. All Rights Reserved.</div>
            <Details />
        </div>
    );
}
const Details = () => {
    return (
        <div className="right-4 lg:right-10 absolute z-50 text-xs lg:text-base top-4 hidden lg:block lg:top-20 font-normal w-1/2 lg:w-1/5 text-justify border-2 border-white rounded-xl p-5">
            A sleek portfolio website showcasing 3D architectural design visualizations and services. Explore immersive, photorealistic models and animations that bring architectural concepts to life, highlighting expertise in modern design and visualization techniques
        </div>
    )
}

const Overlay = () => {
    return (
        <div className="fixed top-6 left-6 text-3xl z-50 lg:w-auto lg:h-auto w-10 h-10">
            <Image src={"/logo.png"} width={150} height={150} alt="logo" />
        </div>
    )
}
