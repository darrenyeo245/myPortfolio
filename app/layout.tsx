import type {Metadata} from "next";
import "./globals.css";
import {Navigation} from "@/app/components/navigation";

export const metadata: Metadata = {
    title: "Darren Yeo",
    description: "Welcome to my personal website!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="bg-gray-900 text-white">
        <Navigation/>
        <main className="flex min-h-screen flex-col items-left mt-24 ml-10">
            {children}
        </main>
        </body>
        </html>
    );
}
