"use client";
import { useEffect, useState } from "react";

export function ColorModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            setIsDark(false);
        } else {
            html.classList.add('dark');
            setIsDark(true);
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="bg-secondarybackground hover:bg-gray-300 dark:bg-secondarybackground-dark dark:hover:bg-hover-dark cursor-pointer rounded px-2 py-2 transition-colors"
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

