import { useState, useEffect } from "preact/hooks";
import Links from "./Links.tsx";

interface iLink {
    "name": string,
    "href": string
}

interface iProject {
    "title": string,
    "description": string,
    "image": string,
    "links": iLink[]
}

const projects: iProject[] = [
  {
    "title": "Gas Numbers Every Solidity Dev Should Know",
    "description": "A re-imagination of Norvig’s “Latency Numbers” for the EVM",
    "image": "../static/gas-nums.png.png",
    "links": [
      {
        "name": "View site",
        "href": "https://0xmacro.com/library/gas-nums"
      },
      {
        "name": "Github repository",
        "href": "https://github.com/0xMacro/gas-numbers-every-solidity-dev-should-know"
      }
    ]
  },
  {
    "title": "Dive Into Solidity Smart Contract Development Udemy Course",
    "description": "The #1 highest rated free Solidity course on Udemy (as of November 2022)",
    "image": "../static/udemy.png.png",
    "links": [
      {
        "name": "View course",
        "href": "https://www.udemy.com/course/dive-into-solidity-smart-contract-development/"
      },
      {
        "name": "Github repository",
        "href": "https://github.com/dd0sxx/dive-into-solidity-udemy-course-lesson-code"
      }
    ]
  },
  {
      "title": "Alumni Soulbound Tokens",
      "description": "SBTs for Macro Engineering Fellowship Alum for on-chain proof of education",
      "image": "../static/sbt-art-1.png",
      "links": [
          {
              "name": "Github repository",
              "href": "https://github.com/dd0sxx/soulbound-macro-nfts"
          }
      ]
  },
]
const nftProjects: iProject[] = [
  {
    "title": "Oily Pebbles",
    "description": "Collaboration with Logan Larkin and Local Machine consiting of 2,000 unique GAN generation pebbles",
    "image": "../static/curated.png",
    "links": [
      {
        "name": "Github Repository",
        "href": "https://github.com/dd0sxx/pebbles"
      },
      {
        "name": "Opensea",
        "href": "https://opensea.io/collection/oilyspebbles"
      },
      {
        "name": "Etherscan",
        "href": "https://etherscan.io/address/0x7d70d50a8e9d1b4f04f5a2fa2e46078da9ebb467"
      }
    ]
  },
  {
    "title": "Oilys V2",
    "description": "Collaboration with Logan Larkin — a whitelisted collection based on holders of the original Oilys Skull collection",
    "image": "../static/oilys2.png",
    "links": [
      {
        "name": "Github Repository",
        "href": "https://github.com/dd0sxx/oilys"
      },
      {
        "name": "Opensea",
        "href": "https://opensea.io/collection/oilysv2"
      },
      {
        "name": "Etherscan",
        "href": "https://etherscan.io/address/0x49623caec21b1ff5d04d7bf7b71531369a69bce4"
      }
    ]
  },
  {
    "title": "Wrist Aficionado Watch Club",
    "description": "Developed frontend mint page and smart contract for Wrist Aficionado’s digital watch collection",
    "image": "../static/oilys2.png",
    "links": [
      {
        "name": "Github Repository",
        "href": "https://github.com/Shipyard-Studio/wristables"
      },
      {
        "name": "Opensea",
        "href": "https://opensea.io/collection/wawc"
      },
    ]
  },
  {
    "title": "Stillz",
    "description": "Developed two smart contracts and frontend mint pages for independent artist collections by STILLZ",
    "image": "../static/tiramisu.png",
    "links": [
      {
        "name": "Tiramisu Github Repository",
        "href": "https://github.com/dd0sxx/tiramisu"
      },
      {
        "name": "Tiramisu Opensea",
        "href": "https://opensea.io/collection/oilysv2"
      },
      {
        "name": "Tiramisu Etherscan",
        "href": "https://etherscan.io/address/0x0647e3137ce7cd942ef8d8f1a35f10459973d069"
      },
      {
        "name": "Oysters Github Repository",
        "href": "https://github.com/dd0sxx/oysters"
      },
      {
        "name": "Oysters Opensea",
        "href": "https://opensea.io/collection/oyster-stillz"
      },
      {
        "name": "Oysters Etherscan",
        "href": "https://etherscan.io/address/0x348aa722cbb8ca4541f3fb279d3672e4f69fe6ac"
      },
      {
        "name": "View site",
        "href": "https://stillz.xyz/"
      },
    ]
  },
]

export default function Projects() {
  
  const [expanded, setExpanded] = useState(false);
  const [nftExpanded, setNftExpanded] = useState(false);

  useEffect(() => {
    let initExpanded: boolean[] = []
    let initNftExpanded: boolean[] = []
    projects.forEach(() => {
      initExpanded.push(false)
    })
    nftProjects.forEach(() => {
      initNftExpanded.push(false)
    })
    setExpanded(initExpanded)
    setNftExpanded(initNftExpanded)
  }, [])

  function expandProject (index) {
    let expandedCopy = [...expanded]
    expandedCopy[index] ? expandedCopy[index] = false : expandedCopy[index] = true
    setExpanded(expandedCopy)
  }
  function expandNftProject (index) {
    let expandedCopy = [...nftExpanded]
    expandedCopy[index] ? expandedCopy[index] = false : expandedCopy[index] = true
    setNftExpanded(expandedCopy)
  }

  return (
    <div class="mt-8">
      <h2 class="text-[#01ccff] text-l">Projects</h2>
      {
        projects.map((project: iProject, i: number) => (
          <div class="my-2">
            <p class=" mx-auto text-[#fbf6f1] text-sm underline underline hover:cursor-pointer" onClick={() => expandProject(i)}>
              <span>⟣</span> {project.title} - <span class="text-[#bbbafb]">{project.description}</span>
            </p>
            < Links links={project.links} expanded={expanded[i]}/>
          </div>
        ))
      }
      <h3 class="text-[#01ccff] text-l mt-8">NFT Projects <span class="text-xs">(These projects do not belong to me, I was simply hired as the developer)</span></h3>
      {
        nftProjects.map((project: iProject, i: number) => (
          <div class="my-2">
            <p class=" mx-auto text-[#fbf6f1] text-sm underline underline hover:cursor-pointer" onClick={() => expandNftProject(i)}>
              <span>⟣</span> {project.title} - <span class="text-[#bbbafb]">{project.description}</span>
            </p>
            < Links links={project.links} expanded={nftExpanded[i]}/>
          </div>
        ))
      }
    </div>
  )
}