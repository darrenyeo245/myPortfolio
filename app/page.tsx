import AboutMe from "@/app/home/about";
import DevStack from "@/app/home/devstack";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center  ml-20 mr-20 ">
    <div className="text-left">
        <AboutMe />
        <DevStack />
    </div>
    </main>
  );
}
