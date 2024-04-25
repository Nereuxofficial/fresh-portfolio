import { useState, useEffect } from "preact/hooks";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/chevron-right.tsx";
import IconGitFork from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/git-fork.tsx";

const GithubRepo = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch the repository data from GitHub API
        fetch("https://api.github.com/users/Nereuxofficial/repos")
            .then((response) => response.json())
            .then((data) => setRepos(data))
            .catch((error) => console.error(error))
    }, []);

    console.info(repos);
    
    return (
        <div class="flex flex-wrap justify-center gap-4">
            {repos.map((repo) => (
                <div key={repo.id} class="bg-gray-100 p-6 rounded-lg shadow-md w-100 h-40 flex flex-col justify-between border-solid border-gray-950 border-2">
                    <div class="flex flex-row items-center gap-2">
                    {repo.fork ? <IconGitFork/> : ""}
                    <a href={repo.html_url} class="font-semibold text-lg text-neutral-950">{repo.name}</a>
                    <IconChevronRight/>
                    </div>
                    <p class="text-gray">{repo.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GithubRepo;