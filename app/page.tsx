import Image from "next/image";

export default function Home() {
    const getAge = () => {
        const birthDate = new Date ("2002-05-24")
        const currentDate = new Date();
        return Math.floor((currentDate.getTime() - birthDate.getTime()) / 3.15576e10)
    }
  return (
    <main className="flex min-h-screen flex-col items-center  ml-20 ">
        <div className="text-left">
            <div className="border-4 border-neutral-800 rounded-xl p-6 shadow-md bg-neutral-900">
      <h1 className="text-2xl font-bold">Hello, my Name is <span className="text-6xl font-bold">Darren Yeo</span></h1>
        <p className="text-m text-gray-400 mt-2 mr-20">I am a {getAge()} Student based in Kiel, Germany and studying Media Engineering at
            Fachochschule Kiel. Currently I am also working as a First-Level-Supporter at PPI-Media.</p>
            </div>
            <div className="border-4 border-neutral-800  rounded-xl p-6 shadow-md bg-neutral-900 mt-5">
          <h1 className=" text-2xl font-bold">My Development Stack</h1>
          <p className="text-m text-gray-400 mt-2"> These are some of the technologies I work with:</p>
          <ul className="list-disc list-inside mt-4">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Git</li>
              <li>Java</li>
              <li>Tailwind CSS</li>
          </ul>
            </div>
        </div>
    </main>
  );
}
