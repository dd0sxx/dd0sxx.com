import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function Counter() {
  const [expand, setExpand] = useState(false);

  function hoverProject () {
    expand ? setExpand(false) : setExpand(true)
  }

  return (
    <p class="mt-12 mb-6 mx-auto text-[#fbf6f1] text-sm underline underline hover:cursor-pointer" onClick={hoverProject}>
      <span>⟣</span> Alumni Soulbound Tokens - <span class="text-[#f89f94]">SBTs for Macro Engineering Fellowship Alum for on-chain proof of education</span>
      {expand ? 
        <div class="ml-6">
          <a href="https://github.com/dd0sxx/soulbound-macro-nfts">
            ⥲ <span class="text-[#f89f94] text-s">github repository</span>
          </a>
        </div>
      :
        <></>
      }
    </p>
  );
}
