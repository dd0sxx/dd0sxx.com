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
    "image": "./gas-nums.png.png",
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
    "image": "./udemy.png.png",
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
      "image": "./sbt-art-1.png",
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
    "image": "./gas-nums.png.png",
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
    "image": "./udemy.png.png",
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
      "image": "./sbt-art-1.png",
      "links": [
          {
              "name": "Github repository",
              "href": "https://github.com/dd0sxx/soulbound-macro-nfts"
          }
      ]
  },
]

export default function Projects() {
  
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let initExpanded: boolean[] = []
    projects.forEach(() => {
      initExpanded.push(false)
    })
    setExpanded(initExpanded)
  }, [])

  function expandProject (index) {
    let expandedCopy = [...expanded]
    expandedCopy[index] ? expandedCopy[index] = false : expandedCopy[index] = true
    setExpanded(expandedCopy)
  }

  return (
    <div class="mt-8">
      <h2 class="text-[#01ccff] text-l">Projects</h2>
      {
        projects.map((project: iProject, i: number) => (
          <div class="my-2">
            <p class=" mx-auto text-[#fbf6f1] text-sm underline underline hover:cursor-pointer" onClick={() => expandProject(i)}>
              <span>⟣</span> {project.title} - <span class="text-[#0051ff]">{project.description}</span>
            </p>
            < Links links={project.links} expanded={expanded[i]}/>
          </div>
        ))
      }
            {
        nftProjects.map((project: iProject, i: number) => (
          <div class="my-2">
            <p class=" mx-auto text-[#fbf6f1] text-sm underline underline hover:cursor-pointer" onClick={() => expandProject(i)}>
              <span>⟣</span> {project.title} - <span class="text-[#0051ff]">{project.description}</span>
            </p>
            < Links links={project.links} expanded={expanded[i]}/>
          </div>
        ))
      }
    </div>
  )
}