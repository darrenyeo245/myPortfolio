import {projects} from "@/app/data/projects";
export default function Projects() {
    return (
        <div className="p-10">
            <ul className="grid grid-cols-2 grid-rows-3 flex-wrap gap-4 text-xl justify-content-center text-center font-bold">
                {projects.map(project => (
                    <li className="text-left border-2 rounded-lg p-4 border-accent hover:scale-105 transition-transform bg-secondarybackground">
                        <img src={project.image} alt={project.name} className="w-100 h-60 mx-auto mb-2"/>
                        {project.name}
                        <p className="font-normal text-lg">{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

