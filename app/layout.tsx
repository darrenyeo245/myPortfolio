import type {Metadata} from "next";
import "./globals.css";
import {Navigation} from "@/app/components/navigation";
import {Footer} from "@/app/components/footer";
import 'devicon/devicon.min.css';
import React from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
    title: "Darren Yeo",
    description: "Welcome to my personal website!",
};

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["500", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export default function RootLayout(
    {children,}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                (function() {
                    const theme = localStorage.getItem('theme');
                    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.documentElement.classList.add('dark');
                    }
                })();
            `,
                }}
            />
        </head>
        <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background text-text dark:bg-background-dark dark:text-text-dark font-body`}>
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        </div>
        <Navigation/>
        <main className="min-h-screen px-4 mt-24 sm:px-6 md:px-10 lg:px-12 pb-20">
            <div className="max-w-7xl mx-auto">
            {children}
            </div>
        </main>
        <Footer/>
        </body>
        </html>
    );
}
