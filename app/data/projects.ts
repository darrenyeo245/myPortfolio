export interface project {
    name: string;
    description: string;
    image: string;
}

export const projects: project[] = [
    {
        name: "My Portfolio",
        description: "A personal portfolio website, the one you are currently viewing, built with Astro and Tailwind CSS.",
        image: "MyPortfolio.png"
    },
    {
        name: "Beer Pong Tracker",
        description: "This is a beerpong-like game that is made with OpenCV and customtkinter. It works with a webcam and Python 3. ",
        image: "BeerPongTracker.png"
    }
];