"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="flex justify-right items-center p-2 bg-white rounded-xl text-black mr-4 ml-4 mt-4 mb-4">
            <span className="ml-4 text-xl"> Darren Yeo </span>
            <span className="ml-4 text-gray-500">|</span>
            <Link href="/" className={pathname === "/" ? "font-bold ml-4 mr-4 px-3 py-2 hover:bg-gray-300 rounded-xl" : " ml-4 mr-4 px-3 py-2 hover:bg-gray-300 rounded-xl"}>
            Home </Link>
            <Link href="/projects" className={pathname === "/projects" ? "font-bold mr-4 ml-4 px-3 py-2 hover:bg-gray-300 rounded-xl" : "mr-4 ml-4 px-3 py-2 hover:bg-gray-300 rounded-xl"}>
                Projects </Link>
            <Link href="/contact" className={pathname === "/contact" ? "font-bold mr-4 ml-4 px-3 py-2 hover:bg-gray-300 rounded-xl" : "mr-4 ml-4 px-3 py-2 hover:bg-gray-300 rounded-xl"}>
                Contact </Link>
        </nav>

    )
}