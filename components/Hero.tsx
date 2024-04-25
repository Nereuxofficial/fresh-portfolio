import IconGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import IconLinkedIn from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-linkedin.tsx";

export default function Hero() {
    return (
        <div
            class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
            style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/hero-bg.jpg');"
        >
            <div class="space-y-4 text-center">
                <h1 class="text-4xl inline-block font-bold">Benedikt Brandmaier's Portfolio</h1>
                <div class="flex flex-row items-center justify-center gap-4">
                    <p class="text-xl max-w-lg text-blue-100 rounded-full bg-lime-900 px-4 py-2">
                        Software Engineer
                    </p>
                    <p class="text-xl max-w-lg text-blue-100 rounded-full bg-lime-900 px-4 py-2">
                        Open Source Contributor
                    </p>
                    <p class="text-xl max-w-lg text-blue-100 rounded-full bg-lime-900 px-4 py-2">
                        Rustacean
                    </p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center"><a
                href="https://www.linkedin.com/in/benedikt-brandmaier-383264259/"
                class="mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
            >
                <IconLinkedIn
                    class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
                    aria-hidden="true"
                />
            </a>
                <a
                    href="https://github.com/Nereuxofficial"
                    class="mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
                >
                    <IconGithub
                        class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </div>
    );
}