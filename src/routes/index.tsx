import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="bg-gradient-to-b from-[#4e6e9c] to-[#9eaffb] h-screen" >
      <Head>
        <title>dd0sxx</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="my-2 mx-auto text-center text-[#01ccff] font-bold text-xl">
          dd0sxx
        </h1>
        <p class="mt-4 mx-auto text-center text-[#01ccff] ">
          Full Stack & Smart Contract Developer
        </p>
        <p class="mt-2 mb-6 mx-auto text-center text-[#01ccff] ">
          Previous Core Contributor @ <a class="underline decoration-green" href="https://0xmacro.com/">0xMacro</a> & <a class="underline decoration-[]" href="https://uniwhales.io/">Uniwhales</a>
        </p>
        <img
          src="/rei.png"
          class="w-48 h-48 mx-auto"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <Counter start={3} />
      </div>
    </div>
  );
}
