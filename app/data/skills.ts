export interface Skill {
    name: string;
    icon: string;
    url?: string;
}

export const skills: Skill[] = [
    {
        name: "HTML",
        icon: "devicon-html5-plain colored",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "Python",
        icon: "devicon-python-plain colored",
        url: "https://www.python.org/"
    }
    ,
    {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "React",
        icon: "devicon-react-plain colored",
        url: "https://react.dev/"
    },
    {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-plain colored",
        url: "https://tailwindcss.com/"
    }
];
