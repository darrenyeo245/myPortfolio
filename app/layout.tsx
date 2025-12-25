import type {Metadata} from "next";
import "./globals.css";
import {Navigation} from "@/app/components/navigation";
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
        <main className="flex min-h-screen flex-col items-left mt-24 ml-10">
            {children}
        </main>
        </body>
        </html>
    );
}
