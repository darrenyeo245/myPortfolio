export default function AboutMe() {
    const getAge = () => {
        const birthDate = new Date ("2002-05-24")
        const currentDate = new Date();
        return Math.floor((currentDate.getTime() - birthDate.getTime()) / 3.15576e10)
    }
    return (
        <div
            className="text-left border-2 rounded-2xl mt-10 p-10 bg-secondarybackground border-accent">
            <section>
                <h1 className="text-4xl font-bold ">Hello, my Name is Darren Yeo.</h1>
                <div className="mt-2 text-secondarytext">
                    <p className="text-lg ">I’m {getAge()} years old and currently studying Media Engineering at
                        Fachhochschule
                        Kiel.
                        Alongside my studies I work on several personal projects.</p>
                    <ul className="pt-4">
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