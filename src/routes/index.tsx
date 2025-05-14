import { Head } from "$fresh/runtime.ts";
import Projects from "../islands/Projects.tsx";

export default function Home() {
  return (
    <div class="bg-[#343b4e] h-full w-full m-auto">
      <Head>
        <title>dd0sxx</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md min-h-screen h-full w-full">
        <h1 class="my-2 mx-auto text-center text-[#01ccff] font-bold text-xl">
          dd0sxx
        </h1>
        <p class="mt-4 mx-auto text-center text-[#01ccff] ">
          Smart Contract Dev/Auditor & Full Stack Dev
        </p>
        <p class="mt-2 mb-6 mx-auto text-center text-[#01ccff] text-xs">
          Currently a Hacking on a new passion project!{" "}
          {/* <a class="underline text-[#bbbafb]" href="https://synthetix.io/">
            Synthetix
          </a> */}
          {", "}
          Previous Contributor @{" "}
          <a
            class="underline text-[#bbbafb]"
            href="https://synthetix.io/"
            target="_blank"
          >
            Synthetix
          </a>
          {", "}
          <a
            class="underline text-[#bbbafb]"
            href="https://llama.xyz/"
            target="_blank"
          >
            Llama
          </a>
          {", "}
          <a
            class="underline text-[#bbbafb]"
            href="https://twitter.com/Token_Logic"
            target="_blank"
          >
            Aave (via TokenLogic)
          </a>
          {", "}
          <a
            class="underline text-[#bbbafb]"
            href="https://0xmacro.com/"
            target="_blank"
          >
            0xMacro
          </a>
          {", "}&{" "}
          <a
            class="underline text-[#bbbafb]"
            href="https://uniwhales.io/"
            target="_blank"
          >
            Uniwhales
          </a>
        </p>
        <img
          src="/rei.png"
          class="w-48 h-48 mx-auto"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <Projects />
        <div class="mt-16 mb-8 flex flex-col m-auto text-center">
          <a class="underline text-[#bbbafb]" href="https://twitter.com/dd0sxx">
            twitter
          </a>
          <a class="underline text-[#bbbafb]" href="https://github.com/dd0sxx">
            github
          </a>
        </div>
      </div>
    </div>
  );
}
