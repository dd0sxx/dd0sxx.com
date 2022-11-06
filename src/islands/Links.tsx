export default function Links({links, expanded}) {

    return (
        <div>
            {expanded ? 
              links.map((link, j) => (
                  <div class="ml-6">
                  <a href={links[j].href} target="_blank" class="text-[#f89f94] text-s underline">
                  <span class="text-[#f89f94] text-s">⥲ </span><span class="text-[#f89f94] text-xs">{links[j].name}</span>
                  </a>
                  </div>
                ))
              :
              <></>
          }
        </div>
    )
}