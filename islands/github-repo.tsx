import { useState, useEffect } from "preact/hooks";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/chevron-right.tsx";
import IconGitFork from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/git-fork.tsx";
import IconStar from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/star.tsx";

const GithubRepo = () => {
    const [repos, setRepos] = useState<any[]>([]);

    useEffect(() => {
        // Fetch the repository data from GitHub API
        // TODO: Switch to repofetcher
        fetch("https://api.github.com/users/Nereuxofficial/repos")
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error(error))
    }, []);

    console.log(repos)
    // setRepos(repos.filter((repo) => repo.pinned))
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    return (
        <div class="relative w-screen flex gap-4 snap-x overflow-x-auto">
            {repos.map((repo) => (
                <div key={repo.id} class="bg-gray-100 shadow-xl p-6 snap-center snap-always rounded-lg flex-col flex-shrink-0 flex w-1/3 border-solid border-gray-950 border-2">
                    <div class="flex flex-row items-center gap-2 w-full">
                        {repo.fork ? <IconGitFork /> : ""}
                        <a href={repo.html_url} class="font-semibold text-lg text-neutral-950">{repo.name}</a>
                        <IconChevronRight />
                    </div>
                    <p class="text-gray">{repo.description}</p>
                    <div class="flex flex-row items-center gap-2">
                        <IconStar /><p>{repo.stargazers_count}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GithubRepo;