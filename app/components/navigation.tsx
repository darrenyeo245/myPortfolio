"use client";
import { usePathname } from "next/navigation";
import {ColorModeToggle} from "@/app/components/colorMode";
export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between p-4 bg-background z-50">
            <div className="flex-1">
                <a href="/" className="text-2xl font-bold hover:text-hover">Darren Yeo</a>
            </div>
            <div className="flex justify-center gap-4">
                <a href="/"
                   className={`hover:text-hover  ${pathname === '/' ? 'font-bold border-b-4 border-accent pb-2' : ''}`}>Home</a>
                <a href="/projects"
                   className={`hover:text-hover  ${pathname === '/projects' ? 'font-bold border-b-4 border-accent pb-2' : ''}`}>Projects</a>
                <a href="/contact"
                   className={`hover:text-hover ${pathname === '/contact' ? 'font-bold border-b-4 border-accent pb-2 ' : ''}`}>Contact</a>
            </div>
            <div className="flex-1 flex justify-end gap-5 items-center">
                <a href="https://github.com/darrenyeo245" target="_blank" rel="noopener norefferer"
                   className="flex flex-col">
                    <i className="devicon-github-original colored text-2xl dark:invert"></i>
                </a>
                <ColorModeToggle/>
            </div>
        </nav>

    )
}