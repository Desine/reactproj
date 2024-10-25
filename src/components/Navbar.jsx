import '../static/style.css'
import { news } from '../news'
import { useEffect } from 'react'

export default function Navbar({setSelected_category, selected_category}) {


  function mark_category(){
    const lis = document.querySelectorAll('li')
    lis.forEach(li => {
      if(li.textContent === selected_category || li.textContent == "All" & selected_category == null){
        li.classList.add("selected-nav")
      } else{
        li.classList.remove("selected-nav")
      }
    })
  }

  useEffect(() => {
    mark_category()
  })

  return (
    <div className='navbar'>
      <ul>
        <li onClick={() => setSelected_category(null)}>All</li>

        {news.map((NewsObject) => (
          <li onClick={(event) => setSelected_category(event.target.textContent)}>
            {NewsObject.category}
          </li>
        ))}
      </ul>
    </div>
  )
}