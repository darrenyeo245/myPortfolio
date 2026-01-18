import {skills} from "@/app/data/skills";
import React from "react";
import {Card, CardContent} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function DevStack() {
    return (
        <div className="border-2 border-accent rounded-xl p-6 shadow-md bg-secondarybackground mt-5">
            <h1 className="text-2xl font-bold text-foreground">My Development Stack</h1>
            <p className="text-m text-muted-foreground mt-2">These are some of the technologies I work with:</p>

            <Carousel className="w-full max-w-3xl mx-auto mt-4"
                      opts={{loop: true}}
            >
                <CarouselContent>
                    {skills.map(skill => (
                        <CarouselItem key={skill.name} className="basis-1/3">
                            <div className="p-2 z-10">
                                <a
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    <Card
                                        className="border-accent bg-card hover:outline-2 hover:outline-accent hover:shadow-lg transition-all h-full">
                                        <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                                            <div
                                                className="flex flex-col items-center gap-3 text-center text-foreground">
                                                <i className={`${skill.icon} text-6xl`}></i>
                                                <span className="text-xl font-bold">{skill.name}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    )
}