import AboutMe from "@/app/home/about";
import DevStack from "@/app/home/devstack";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center py-6 md:py-10">
            <div className="w-full max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-6 lg:gap-8">
                    <AboutMe/>
                    <DevStack/>
                </div>
            </div>
        </main>
    );
}
