import ProjectOverview from "./Project.Overview";
import { getRepos } from "@/lib/github/getRepos";

export default async function Projects() {
    const repos = await getRepos();

    return (
        <div>
            <h1>Projects</h1>
            {repos.map((repo) => (
                <ProjectOverview {...repo} />
            ))}
        </div>
    );
}
