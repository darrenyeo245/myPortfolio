"use client";
import { usePathname } from "next/navigation";
import {ColorModeToggle} from "@/app/components/colorMode";
export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between p-4">
            <div className="flex-1">
                <a href="/" className="text-2xl font-bold hover:text-hover dark:hover:text-hover-dark ">Darren Yeo</a>
            </div>
            <div className="flex justify-center gap-4">
                <a href="/"
                   className={`hover:text-hover dark:hover:text-hover-dark  ${pathname === '/' ? 'font-bold border-b-4 border-accent pb-2 dark:border-accent-dark' : ''}`}>Home</a>
                <a href="/projects"
                   className={`hover:text-hover dark:hover:text-hover-dark  ${pathname === '/projects' ? 'font-bold border-b-4 border-accent pb-2  dark:border-accent-dark' : ''}`}>Projects</a>
                <a href="/contact"
                   className={`hover:text-hover dark:hover:text-hover-dark ${pathname === '/contact' ? 'font-bold border-b-4 border-accent pb-2  dark:border-accent-dark' : ''}`}>Contact</a>
            </div>
            <div className="flex-1 flex justify-end gap-4 items-center">
                <a href="https://github.com/darrenyeo245" target="_blank" rel="noopener norefferer"
                   className="flex flex-col">
                    <i className="devicon-github-original colored text-2xl dark:invert"></i>
                </a>
            </div>
            <ColorModeToggle/>
        </nav>

    )
}