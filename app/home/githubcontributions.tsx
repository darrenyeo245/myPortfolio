import { ContributionsChart } from "@/app/home/githubchart";

const GITHUB_USERNAME = "darrenyeo245";

interface DayContribution {
    date: string;
    count: number;
}

async function getMonthlyContributions() {
    try {
        const res = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            throw new Error("Contributions API request failed");
        }

        const data: { contributions: DayContribution[] } = await res.json();
        
        const now = new Date();
        const buckets: { key: string; label: string; contributions: number }[] = [];

        for (let i = 11; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            buckets.push({
                key: `${d.getFullYear()}-${d.getMonth()}`,
                label: d.toLocaleDateString("de-DE", { month: "short" }),
                contributions: 0,
            });
        }
        
        const bucketMap = new Map(buckets.map((b) => [b.key, b]));

        for (const day of data.contributions) {
            const d = new Date(day.date);
            const key = `${d.getFullYear()}-${d.getMonth()}`;
            const bucket = bucketMap.get(key);
            if (bucket) {
                bucket.contributions += day.count;
            }
        }

        return buckets.map(({ label, contributions }) => ({
            month: label,
            contributions,
        }));
    } catch {
        return null;
    }
}

export default async function GitHubContributions() {
    const data = await getMonthlyContributions();

    if (!data) {
        return null;
    }

    return (
        <div className="border-2 border-accent rounded-xl p-6 shadow-md bg-background mt-5 font-mono">
            <h1 className="text-2xl font-bold text-foreground">Contributions</h1>
            <p className="text-m text-muted-foreground mt-2">
                My GitHub contributions over the last 12 months:
            </p>
            <ContributionsChart data={data} />
        </div>
    );
}