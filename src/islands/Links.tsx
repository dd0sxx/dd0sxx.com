export default function Links({links, expanded}) {

    return (
        <div>
            {expanded ? 
              links.map((link, j) => (
                  <div class="ml-6">
                  <a href={links[j].href}>
                  ⥲ <span class="text-[#f89f94] text-s">{links[j].name}</span>
                  </a>
                  </div>
                ))
              :
              <></>
          }
        </div>
    )

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
}