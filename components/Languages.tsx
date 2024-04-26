// Component to showcase the programming languages I have experience with
const language_list = ["rust", "python", "java", "c", "cplusplus"]
const tools = ["linux", "docker", "git", "kubernetes", "nix", "postgresql", "redis", "html5", "django", "axum"]

function generate_img_with_text(language: string) {
    return (
        <div class="flex flex-auto transform transition duration-500 ease-in-out 
                      rounded-full hover:scale-110 hover:shadow-black hover:shadow-2xl relative">
            <img class="h-24" alt="" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg`}></img>
            <div class="absolute top-0 left-0 w-full h-full bg-transparent opacity-0 
              hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 class="text-black font-bold text-lg">{language[0].toUpperCase() + language.slice(1)}</h3>
            </div>
        </div>
    )
}

export default function Languages() {
    return (
        <div class="flex flex-auto flex-col items-center">
            <div class="flex flex-auto flex-col items-center">
                <h2 class="text-5xl font-bold p-5 text-white">Programming Languages</h2>
                <div class="flex flex-row justify-between">
                    {language_list.map((language) => (
                        generate_img_with_text(language)
                    ))}
                </div>
            </div>
            <div class="flex flex-auto flex-col items-center">
                <h2 class="text-5xl font-bold p-5 text-white">Tools</h2>
                <div class="flex flex-row justify-between">
                    {tools.map((tool) => (
                        generate_img_with_text(tool)
                    ))}
                </div>
            </div>
        </div>
    )
}