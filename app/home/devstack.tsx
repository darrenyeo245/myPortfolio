import {skills} from "@/app/data/skills";

export default function DevStack() {
    return (
        <div className="border-2 border-accent rounded-xl p-6 shadow-md bg-secondarybackground mt-5 dark:border-accent-dark dark:bg-secondarybackground-dark">
            <h1 className="text-2xl font-bold text-text dark:text-text-dark">My Development Stack</h1>
            <p className="text-m text-secondarytext mt-2 dark:text-secondarytext-dark"> These are some of the technologies I work with:</p>
            <ul className="grid grid-cols-3 grid-rows-2 gap-4 text-xl justify-content-center text-center font-bold">
                {skills.map(skill => (
                    <li key={skill.name} className="hover:scale-105 transition-transform border rounded-lg p-4 border-accent bg-box dark:border-accent-dark dark:bg-box-dark">
                        <a href={skill.url} target="_blank" rel="noopener noreferrer"
                           className="flex flex-col items-center text-text dark:text-text-dark">
                            <i className={skill.icon + " text-4xl align-middle"}></i>
                            {skill.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}