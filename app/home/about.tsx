export default function AboutMe() {
    const getAge = () => {
        const birthDate = new Date ("2002-05-24")
        const currentDate = new Date();
        return Math.floor((currentDate.getTime() - birthDate.getTime()) / 3.15576e10)
    }
    return (
            <div className="border-4 border-neutral-800 rounded-xl p-6 shadow-md bg-neutral-900">
                <h1 className="text-2xl font-bold">Hello, my Name is <span className="text-6xl font-bold">Darren Yeo</span></h1>
                <p className="text-m text-gray-400 mt-2 mr-20">I am a {getAge()} Student based in Kiel, Germany and studying Media Engineering at
                    Fachochschule Kiel. Currently I am also working as a First-Level-Supporter at PPI-Media.</p>
            </div>
    )
}