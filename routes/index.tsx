import { useSignal } from "@preact/signals";
import Hero from "../components/Hero.tsx";
import GithubRepo from "../islands/github-repo.tsx";
import Languages from "../components/Languages.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-gradient-to-t from-[#481774] to-[#2f0583]">
      <Hero/>
      <section class="py-8">
        <div class="flex flex-col items-center">
          <h2 class="text-5xl font-bold p-5 text-indigo-50">Explore my Repositories</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <GithubRepo/>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <Languages/> 
        </div>
      </section>
    </div>
  );
}
