import { Link } from "react-scroll"
import { data } from "../utils"


const NavMobile = () => {
  return (
    <nav className="bg-accent/95 w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {
          data.nav.map(({name, href}, i) => (
            <li key={i}>
              <Link 
              className="link text-white text-xl"
              to={href}>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavMobile