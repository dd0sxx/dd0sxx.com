export default function Links({links, expanded,}) {

    return (
        <div>
            {expanded ? 
              links.map((link, j) => (
                  <div class="ml-6">
                  <a href={links[j].href} target="_blank" class="text-[#bbbafb] text-s underline">
                  <span class="text-[#bbbafb] text-s">⥲ </span><span class="text-[#bbbafb] text-xs">{links[j].name}</span>
                  </a>
                  </div>
                ))
              :
              <></>
          }
        </div>
    )
}