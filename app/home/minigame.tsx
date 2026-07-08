"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CANVAS_WIDTH = 320;
const CANVAS_HEIGHT = 420;
const BIRD_SIZE = 20;
const GRAVITY = 0.03;
const FLAP_VELOCITY = -2;
const PIPE_WIDTH = 50;
const PIPE_GAP = 130;
const PIPE_SPEED = 1;
const PIPE_SPAWN_INTERVAL = 150; 

type Pipe = { x: number; gapY: number; passed: boolean };

export default function MiniGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [status, setStatus] = useState<"idle" | "playing" | "gameover">("idle");
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const stateRef = useRef({
        birdY: CANVAS_HEIGHT / 2,
        birdVelocity: 0,
        pipes: [] as Pipe[],
        frame: 0,
        score: 0,
    });
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const saved = window.localStorage.getItem("minigame-highscore");
        if (saved) setHighScore(parseInt(saved, 10));
    }, []);

    const getColor = (varName: string) =>
        getComputedStyle(document.documentElement).getPropertyValue(varName).trim();

    const resetState = () => {
        stateRef.current = {
            birdY: CANVAS_HEIGHT / 2,
            birdVelocity: 0,
            pipes: [],
            frame: 0,
            score: 0,
        };
        setScore(0);
    };

    const flap = useCallback(() => {
        if (status === "idle") {
            resetState();
            setStatus("playing");
            stateRef.current.birdVelocity = FLAP_VELOCITY;
        } else if (status === "playing") {
            stateRef.current.birdVelocity = FLAP_VELOCITY;
        } else if (status === "gameover") {
            resetState();
            setStatus("playing");
        }
    }, [status]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const accent = getColor("--accent");
        const foreground = getColor("--foreground");
        const background = getColor("--background");
        const border = getColor("--border");

        const loop = () => {
            const s = stateRef.current;

            if (status === "playing") {
                s.birdVelocity += GRAVITY;
                s.birdY += s.birdVelocity;
                s.frame++;

                if (s.frame % PIPE_SPAWN_INTERVAL === 0) {
                    const gapY = 60 + Math.random() * (CANVAS_HEIGHT - 120 - PIPE_GAP);
                    s.pipes.push({ x: CANVAS_WIDTH, gapY, passed: false });
                }

                s.pipes.forEach((p) => (p.x -= PIPE_SPEED));
                s.pipes = s.pipes.filter((p) => p.x + PIPE_WIDTH > 0);

                const birdX = 60;
                s.pipes.forEach((p) => {
                    if (!p.passed && p.x + PIPE_WIDTH < birdX) {
                        p.passed = true;
                        s.score++;
                        setScore(s.score);
                    }
                    const hitX = birdX + BIRD_SIZE > p.x && birdX < p.x + PIPE_WIDTH;
                    const hitY = s.birdY < p.gapY || s.birdY + BIRD_SIZE > p.gapY + PIPE_GAP;
                    if (hitX && hitY) {
                        endGame(s.score);
                    }
                });

                if (s.birdY + BIRD_SIZE > CANVAS_HEIGHT || s.birdY < 0) {
                    endGame(s.score);
                }
            }

            // draw
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            ctx.fillStyle = accent;
            s.pipes.forEach((p) => {
                ctx.fillRect(p.x, 0, PIPE_WIDTH, p.gapY);
                ctx.fillRect(p.x, p.gapY + PIPE_GAP, PIPE_WIDTH, CANVAS_HEIGHT - p.gapY - PIPE_GAP);
            });

            ctx.fillStyle = foreground;
            ctx.beginPath();
            ctx.arc(60 + BIRD_SIZE / 2, s.birdY + BIRD_SIZE / 2, BIRD_SIZE / 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = border;
            ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [status]);

    const endGame = (finalScore: number) => {
        setStatus("gameover");
        if (finalScore > highScore) {
            setHighScore(finalScore);
            window.localStorage.setItem("minigame-highscore", String(finalScore));
        }
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.code === "Space") {
                e.preventDefault();
                flap();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [flap]);

    return (
        <div className="border-2 border-accent rounded-xl p-6 shadow-md bg-background mt-5 font-mono">
            <h1 className="text-2xl font-bold text-foreground">Bored or need a rest?</h1>
            <p className="text-m text-muted-foreground mt-2">
                A Flappy Bird Clone. Click/Spacebar to fly.
            </p>

            <div className="flex flex-col items-center mt-4">
                <canvas
                    ref={canvasRef}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    onClick={flap}
                    className="rounded-lg cursor-pointer touch-none max-w-full"
                />
                <div className="flex justify-between w-full max-w-[320px] mt-3 text-foreground">
                    <span>Score: {score}</span>
                    <span>Highscore: {highScore}</span>
                </div>
                {status === "idle" && (
                    <p className="mt-2 text-muted-foreground text-sm">Click to start</p>
                )}
                {status === "gameover" && (
                    <p className="mt-2 text-accent font-bold">Game Over – click to restart</p>
                )}
            </div>
        </div>
    );
}
