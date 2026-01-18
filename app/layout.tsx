import type {Metadata} from "next";
import "./globals.css";
import {Navigation} from "@/app/components/navigation";
import {Footer} from "@/app/components/footer";
import 'devicon/devicon.min.css';
import React from "react";    

export const metadata: Metadata = {
    title: "Darren Yeo",
    description: "Welcome to my personal website!",
};

export default function RootLayout(
    {children,}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body className="bg-background text-text dark:bg-background-dark dark:text-text-dark">
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
