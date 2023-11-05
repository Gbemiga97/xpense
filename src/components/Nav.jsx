import { Link } from "react-scroll"
import { data } from "../utils"


const Nav = () => {
  return (
   <nav>
    <ul className="flex gap-x-10">
      {
        data.nav.map(({name, href}, i) => (
          <li>
            <Link to={href}
            className="cursor-pointer hover:text-accent transition">
              {name}
            </Link>
          </li>
        ))
      }
    </ul>
   </nav>
  )
}

export default Nav