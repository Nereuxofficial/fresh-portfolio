import IconGithub from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-github.tsx";
import IconLinkedIn from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/brand-linkedin.tsx";


export default function Hero() {
  return (
    <div className="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 rounded-xl text-white relative"> {/* Relative added for image positioning */}
      <img src="/hero-bg.jpg" alt="Hero Background" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl brightness-50 blur-none transition ease-in-out hover:blur-sm" /> {/* Image Placement */}

      <div className="z-10 space-y-4 text-center"> 
        <h1 className="text-4xl inline-block font-bold">Benedikt Brandmaier's Portfolio</h1>
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="text-xl max-w-lg text-blue-100 rounded-full bg-lime-900 px-4 py-2">
            Software Engineer
          </p>
          <p className="text-xl max-w-lg text-blue-100 rounded-full bg-lime-900 px-4 py-2">
            Open Source Contributor
          </p>
          <p className="text-xl max-w-lg text-blue-100 rounded-full bg-lime-900 px-4 py-2">
            Rustacean
          </p>
        </div>
      </div>

      <div className="z-10 flex flex-col md:flex-row items-center"> {/* z-index */}
        <a
          href="https://www.linkedin.com/in/benedikt-brandmaier-383264259/"
          className="mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
        >
          <IconLinkedIn
            className="inline-block w-10 h-10 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://github.com/Nereuxofficial"
          className="mt-4 transition-colors text-blue-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-blue-100"
        >
          <IconGithub
            className="inline-block w-10 h-10 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
