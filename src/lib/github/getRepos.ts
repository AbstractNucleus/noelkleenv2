import "server-only";

export type Repo = {
    name: string;
    description: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
};

export async function getRepos(): Promise<Repo[]> {
    let res = await fetch("https://api.github.com/users/AbstractNucleus/repos");
    return res.json();
}
