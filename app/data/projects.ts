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
    },
    {
        name: "DiveVR",
        description: "A virtual reality diving simulation game developed using Unity and C#, offering immersive underwater experiences.",
        image: "DiveVR.png"
    },
    {
        name: "GuessIt",
        description: "A game based on the popular TV show 'Family Feud', developed with Next.js and Nakama as an intern project at techagogics",
        image: "GuessIt.png"
    },
    {
        name: "Furhat Service Robot",
        description: "A social robot developed using Furhat Robotics platform, designed to interact and engage with patients and visitors at the UKSH.",
        image: "Furhat.png"
    },
    {   name: "Bowl-A-Rama",
        description: "An arcade-style bowling game developed using Unity and C# focused on working with external controllers. The user uses a mobile phone as an remote controller to play the game.",
        image: "Bowl-A-Rama.png"
        
    }
];