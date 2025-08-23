import React from "react";

export interface Skill {
    name: string;
    icon: string;
    }

export const skills: Skill[] = [
{
    name: "HTML",
    icon: "devicon-html5-plain colored"
    },
{
    name: "Python",
    icon: "devicon-python-plain colored"
    }
,
{    name: "TypeScript",
    icon: "devicon-typescript-plain colored"
    },
{    name: "React",
    icon: "devicon-react-plain colored"
    },
{    name: "Astro",
    icon: "devicon-astro-plain colored"
    },
{    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain colored"
    }
];
