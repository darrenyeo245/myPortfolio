"use client";
import { useEffect, useState } from "react";

export function ColorModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDarkMode = savedTheme === 'dark' ||
            (!savedTheme && document.documentElement.classList.contains('dark'));

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className=" bg-secondarybackground hover:bg-gray-300 cursor-pointer rounded px-2 py-2 transition-colors"
        >
            <span className="sr-only">Toggle theme</span>
            {isDark ? (
                <img src="/sun.svg" alt="Light Mode" className="w-6 h-6 invert" />
            ) : (
                <img src="/moon.svg" alt="Dark Mode" className="w-6 h-6" />
            )}
        </button>
    );
}

