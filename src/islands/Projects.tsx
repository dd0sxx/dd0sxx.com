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
      "title": "Alumni Soulbound Tokens",
      "description": "SBTs for Macro Engineering Fellowship Alum for on-chain proof of education",
      "image": "./sbt-art-1.png",
      "links": [
          {
              "name": "github repository",
              "href": "https://github.com/dd0sxx/soulbound-macro-nfts"
          }
      ]
  },
  {
      "title": "Dive Into Solidity Smart Contract Development Udemy Course",
      "description": "The #1 highest rated free Solidity course on Udemy (as of November 2022)",
      "image": "./udemy.png.png",
      "links": [
          {
              "name": "link to course",
              "href": "https://www.udemy.com/course/dive-into-solidity-smart-contract-development/"
          }
      ]
  },
  {
      "title": "Gas Numbers Every Solidity Dev Should Know",
      "description": "A re-imagination of Norvig’s “Latency Numbers” for the EVM",
      "image": "./gas-nums.png.png",
      "links": [
          {
              "name": "link to site",
              "href": "https://0xmacro.com/library/gas-nums"
          }
      ]
  }
]

export default function Projects() {

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let initExpanded: bool[] = []
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
    <div>
      {
        projects.map((project: iProject, i: number) => (
          <div class="my-2">
            <p class=" mx-auto text-[#fbf6f1] text-sm underline underline hover:cursor-pointer" onClick={() => expandProject(i)}>
              <span>⟣</span> {project.title} - <span class="text-[#f89f94]">{project.description}</span>
            </p>
            < Links links={project.links} expanded={expanded[i]}/>
          </div>
        ))
      }
    </div>
  )
}
        
       // {projects.map((project: iProject, i: number) => {
        //   <p class="mt-12 mb-6 mx-auto text-[#fbf6f1] text-sm underline underline hover:cursor-pointer" onClick={() => expandProject(i)}>
        //     <span>⟣</span> {project.title} - <span class="text-[#f89f94]">{project.description}</span></p>
        //     {expanded[i] ? 
        //       {project.links.map((link, j) => (
          //         <div class="ml-6">
          //         <a href={project.links[j].href}>
          //         ⥲ <span class="text-[#f89f94] text-s">{project.links[j].name}</span>
          //         </a>
          //         </div>
          //       ))}
          //     :
          //     <></>
          //   }
          // }