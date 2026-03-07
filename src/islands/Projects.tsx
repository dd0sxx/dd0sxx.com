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
    title: "Joust",
    description: "Permissionless peri-mutuel prediction markets with ZK-private betting",
    image: "",
    links: [
      {
        name: "Website",
        href: "https://www.joustonline.com/",
      },
    ],
  },
  {
    title: "Aori",
    description: "Cross-chain intent settlement contracts with Permit2 & UUPS, deployed across 10 EVM chains",
    image: "",
    links: [
      {
        name: "Website",
        href: "https://www.aori.io/",
      },
      {
        name: "Github Repository",
        href: "https://github.com/aori-io/aori",
      },
    ],
  },
  {
    title: "Sapience",
    description: "Prediction market with orderbook trading & LayerZero + UMA oracle resolution",
    image: "",
    links: [
      {
        name: "Website",
        href: "https://www.sapience.xyz/",
      },
      {
        name: "Github Repository",
        href: "https://github.com/sapiencexyz/sapience",
      },
    ],
  },
    {
    title: "Synthetix V4",
    description: "Offchain CLOB (Lua/Redis), Binance-style trading API (Express/TS), and smart contract framework",
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

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    let initExpanded: boolean[] = [];
    projects.forEach(() => {
      initExpanded.push(false);
    });
    setExpanded(initExpanded);
  }, []);

  function expandProject(index) {
    let expandedCopy = [...expanded];
    expandedCopy[index]
      ? (expandedCopy[index] = false)
      : (expandedCopy[index] = true);
    setExpanded(expandedCopy);
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
    </div>
  );
}
