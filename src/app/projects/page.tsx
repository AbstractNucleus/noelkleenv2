import ProjectOverview from "./Project.Overview";
import { getRepos } from "@/lib/github/getRepos";

export default async function Projects() {
    const repos = await getRepos();

    return (
        <div>
            <div className="flex flex-col space-y-4">
                {repos.map((repo) => (
                    <ProjectOverview {...repo} />
                ))}
            </div>
        </div>
    );
}
