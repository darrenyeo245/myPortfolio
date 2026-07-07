export default function AboutMe() {
    const getAge = () => {
        const birthDate = new Date ("2002-05-24")
        const currentDate = new Date();
        return Math.floor((currentDate.getTime() - birthDate.getTime()) / 3.15576e10)
    }
    return (
        <div className="text-left mt-10 py-6">
            <section>
                <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">Hello, my Name is Darren Yeo.</h1>
                <div className="mt-6 text-secondarytext max-w-2xl font-body">
                    <p className="text-lg ">I’m {getAge()} years old and currently studying Media Engineering at
                        the University of Applied Sciences Kiel.
                        Alongside my studies I am working for the Zukunfstlabor Generative KI (ZGKI) as a project assistant.
                    </p>
                    <ul className="pt-6 space-y-2 text-lg">
                        <li><span className="font-bold text-text">Location:</span> Germany, Kiel
                        </li>
                        <li><span className="font-bold text-text">Languages:</span> German, English,
                            Mandarin,
                            Spanish (Basics)
                        </li>
                        <li><span className="font-bold text-text">Hobbies:</span> Programming,
                            Gaming, Reading,
                            Gym,
                            playing Guitar
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}