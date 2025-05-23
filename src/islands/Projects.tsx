import { useEffect, useState } from "preact/hooks";
import Links from "./Links.tsx";

interface iLink {
  name: string;
  href: string;
}

interface iProject {
  title: string;
  description: string;
  image: string;
  links: iLink[];
}

const projects: iProject[] = [
    {
    title: "Synthetix V4",
    description: "Contributed towards v4 offchain CLOB (LUA / redis) and the smart contract framework",
    image: "../static/snx.png",
    links: [
      {
        name: "Github Repository Private :(",
        href: "https://github.com/moss-eth",
      },
    ],
  },
  {
    title: "Zap",
    description: "Enabled 'zapping' Synthetix native collateral unwinding by integrating Aave flash loans & Odos swaps",
    image: "../static/snx.png",
    links: [
      {
        name: "Github Repository",
        href: "https://github.com/JaredBorders/zap",
      },
    ],
  },
  {
    title: "Synthetix V3 Cross Chain Governance",
    description: "Implemented cross chain governance voting that settled on Snaxchain",
    image: "../static/snx.png",
    links: [
      {
        name: "Github Repository",
        href: "https://github.com/Synthetixio/synthetix-v3/tree/main/protocol/governance",
      },
    ],
  },
  {
    title: "Aave Governance",
    description:
      "Implemented and Executed on Aave Governance Proposals via TokenLogic",
    image: "../static/aave.png",
    links: [
      {
        name: "Github Repository",
        href: "https://github.com/bgd-labs/aave-proposals-v3",
      },
    ],
  },
  {
    title: "Llama Token Voting Module",
    description:
      "A smart contract module to enable token voting for Llama instances",
    image: "../static/llama.png",
    links: [
      {
        name: "Github Repository",
        href: "https://github.com/llamaxyz/llama-periphery",
      },
      {
        name: "Audit Report",
        href: "https://github.com/llamaxyz/llama/blob/main/audits/Llama-Token-Governor-Spearbit-Audit.pdf",
      },
    ],
  },
  {
    title: "Llama Governance Framework",
    description:
      "A bleeding edge access control system for onchain organizations",
    image: "../static/llama.png",
    links: [
      {
        name: "View site",
        href: "https://llama.xyz/",
      },
      {
        name: "Github Repository",
        href: "https://github.com/llamaxyz/llama",
      },
      {
        name: "Spearbit Audit 1 (June 2023)",
        href: "https://github.com/llamaxyz/llama/blob/main/audits/Llama-Spearbit-Audit-3.pdf",
      },
      {
        name: "Code4rena Audit",
        href: "https://github.com/llamaxyz/llama/blob/main/audits/Llama-Code4rena-Audit.md",
      },
      {
        name: "Spearbit Audit 2 (August 2023)",
        href: "https://github.com/llamaxyz/llama/blob/main/audits/Llama-Spearbit-Audit-2.pdf",
      },
      {
        name: "Llama v1.1.0 Spearbit Audit (January 2024)",
        href: "https://github.com/llamaxyz/llama/blob/main/audits/Llama-Spearbit-Audit-3.pdf",
      },
    ],
  },
  {
    title: "Gas Numbers Every Solidity Dev Should Know",
    description: "A re-imagination of Norvig’s “Latency Numbers” for the EVM",
    image: "../static/gas-nums.png.png",
    links: [
      {
        name: "View site",
        href: "https://0xmacro.com/library/gas-nums",
      },
      {
        name: "Github Repository",
        href: "https://github.com/0xMacro/gas-numbers-every-solidity-dev-should-know",
      },
    ],
  },
  {
    title: "Dive Into Solidity Udemy Course",
    description:
      "The #1 highest rated free Solidity course on Udemy",
    image: "../static/udemy.png.png",
    links: [
      {
        name: "View course",
        href: "https://www.udemy.com/course/dive-into-solidity-smart-contract-development/",
      },
      {
        name: "Github Repository",
        href: "https://github.com/dd0sxx/dive-into-solidity-udemy-course-lesson-code",
      },
    ],
  },
  {
    title: "Alumni Soulbound Tokens",
    description:
      "SBTs for Macro Engineering Fellowship Alum for on-chain proof of education",
    image: "../static/sbt-art-1.png",
    links: [
      {
        name: "Github Repository",
        href: "https://github.com/dd0sxx/soulbound-macro-nfts",
      },
    ],
  },
];
const nftProjects: iProject[] = [
  {
    title: "Oily Pebbles",
    description:
      "Collaboration with Logan Larkin and Local Machine consisting of 2,000 GAN generated pebbles",
    image: "../static/curated.png",
    links: [
      {
        name: "Github Repository",
        href: "https://github.com/dd0sxx/pebbles",
      },
      {
        name: "Opensea",
        href: "https://opensea.io/collection/oilyspebbles",
      },
      {
        name: "Etherscan",
        href: "https://etherscan.io/address/0x7d70d50a8e9d1b4f04f5a2fa2e46078da9ebb467",
      },
    ],
  },
  {
    title: "Oilys V2",
    description:
      "A follow-up collection to Logan Larkin's original Oilys Skulls",
    image: "../static/oilys2.png",
    links: [
      {
        name: "Github Repository",
        href: "https://github.com/dd0sxx/oilys",
      },
      {
        name: "Opensea",
        href: "https://opensea.io/collection/oilysv2",
      },
      {
        name: "Etherscan",
        href: "https://etherscan.io/address/0x49623caec21b1ff5d04d7bf7b71531369a69bce4",
      },
    ],
  },
  {
    title: "Stillz",
    description:
      "Developed two smart contracts and frontend mint pages for independent artist collections by STILLZ",
    image: "../static/tiramisu.png",
    links: [
      {
        name: "Tiramisu Github Repository",
        href: "https://github.com/dd0sxx/tiramisu",
      },
      {
        name: "Tiramisu Opensea",
        href: "https://opensea.io/collection/oilysv2",
      },
      {
        name: "Tiramisu Etherscan",
        href: "https://etherscan.io/address/0x0647e3137ce7cd942ef8d8f1a35f10459973d069",
      },
      {
        name: "Oysters Github Repository",
        href: "https://github.com/dd0sxx/oysters",
      },
      {
        name: "Oysters Opensea",
        href: "https://opensea.io/collection/oyster-stillz",
      },
      {
        name: "Oysters Etherscan",
        href: "https://etherscan.io/address/0x348aa722cbb8ca4541f3fb279d3672e4f69fe6ac",
      },
      {
        name: "View site",
        href: "https://stillz.xyz/",
      },
    ],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const [nftExpanded, setNftExpanded] = useState(false);

  useEffect(() => {
    let initExpanded: boolean[] = [];
    let initNftExpanded: boolean[] = [];
    projects.forEach(() => {
      initExpanded.push(false);
    });
    nftProjects.forEach(() => {
      initNftExpanded.push(false);
    });
    setExpanded(initExpanded);
    setNftExpanded(initNftExpanded);
  }, []);

  function expandProject(index) {
    let expandedCopy = [...expanded];
    expandedCopy[index]
      ? (expandedCopy[index] = false)
      : (expandedCopy[index] = true);
    setExpanded(expandedCopy);
  }
  function expandNftProject(index) {
    let expandedCopy = [...nftExpanded];
    expandedCopy[index]
      ? (expandedCopy[index] = false)
      : (expandedCopy[index] = true);
    setNftExpanded(expandedCopy);
  }

  return (
    <div class="mt-8">
      <h2 class="text-[#01ccff] text-l">Projects</h2>
      {projects.map((project: iProject, i: number) => (
        <div class="my-6 lg:my-4">
          <p
            class=" mx-auto text-[#fbf6f1] text-sm underline underline-offset-4 hover:cursor-pointer"
            onClick={() => expandProject(i)}
          >
            <span>⟣</span> {project.title} -{" "}
            <span class="text-[#bbbafb]">{project.description}</span>
          </p>
          <Links links={project.links} expanded={expanded[i]} />
        </div>
      ))}
      <h3 class="text-[#01ccff] text-l mt-8">
        NFT Projects{" "}
        <span class="text-xs">
          (Contracted as lead developer on these collections)
        </span>
      </h3>
      {nftProjects.map((project: iProject, i: number) => (
        <div class="my-6 lg:my-4">
          <p
            class=" mx-auto text-[#fbf6f1] text-sm underline hover:cursor-pointer"
            onClick={() => expandNftProject(i)}
          >
            <span>⟣</span> {project.title} -{" "}
            <span class="text-[#bbbafb]">{project.description}</span>
          </p>
          <Links links={project.links} expanded={nftExpanded[i]} />
        </div>
      ))}
    </div>
  );
}
