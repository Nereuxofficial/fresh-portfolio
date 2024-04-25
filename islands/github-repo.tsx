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

    console.debug(repos);

    return (
        <div class="flex flex-wrap justify-center gap-4">
            {repos.map((repo) => (
                <div key={repo.id} class="bg-gray-200 p-6 rounded-lg shadow-md w-100 h-40 flex flex-col justify-between">
                    <div class="flex flex-row items-center gap-2">
                    {repo.fork ? <IconGitFork/> : ""}
                    <h3 class="font-semibold text-lg text-gray-800">{repo.name}</h3>
                    </div>
                    <p class="text-gray-600">{repo.description}</p>
                    <div class="flex items-center justify-center">
                        <a class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center"
                            href={repo.html_url}>
                            View on GitHub <IconChevronRight class="ml-2" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GithubRepo;