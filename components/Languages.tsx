// Component to showcase the programming languages I have experience with
const language_list = ["rust", "python", "java", "c", "cplusplus"]
const tools = ["linux", "docker", "git", "kubernetes", "nix", "postgresql", "redis", "html5", "django", "actix"]

export default function Languages() {
    return (
        <div class="flex flex-auto flex-col items-center">
        <div class="flex flex-auto flex-col items-center">
            <h2 class="text-5xl font-bold p-5 text-white">Programming Languages</h2>
            <div class="flex flex-row justify-between">
                {language_list.map((language) => (
                    <div key={language} class="flex flex-auto hover:scale-110 transform transition duration-500 ease-in-out">
                        <img class="h-32" alt={language} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${language}/${language}-original.svg`}></img>
                    </div>
                ))}
            </div>
        </div>
        <div class="flex flex-auto flex-col items-center">
            <h2 class="text-5xl font-bold p-5 text-white">Tools</h2>
            <div class="flex flex-row justify-between">
                {tools.map((tool) => (
                    <div key={tool} class="flex flex-auto hover:scale-110 transform transition duration-500 ease-in-out">
                        <img class="h-32" alt={tool} src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`}></img>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}