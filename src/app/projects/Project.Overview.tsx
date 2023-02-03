import { Repo } from "@/lib/github/getRepos";

export default function ProjectOverview(repo: Repo) {
    return (
        <div>
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
        </div>
    );
}
