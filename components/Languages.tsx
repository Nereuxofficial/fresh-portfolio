// Component to showcase the programming languages I have experience with
const language_list = ["rust", "python", "java", "c", "cplusplus"]

export default function Languages() {
    return (
        <div class="flex flex-row bg-slate-600 justify-between">
            {language_list.map((language) => (
                <div key={language} class="flex flex-auto">
                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/{language}/{language}.png"></img>
                </div>
            ))}
        </div>
    )
}