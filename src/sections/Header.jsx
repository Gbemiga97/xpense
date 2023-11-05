import { useEffect, useState } from "react"
import { data, variants } from "../utils"
import {HiMenuAlt4, HiOutlineX} from 'react-icons/hi'
import { Link } from "react-scroll"
import { Nav, NavMobile } from "../components"
import { motion } from "framer-motion"


const Header = () => {

  const {logo, btnText} = data.header

  const [showNav, setShowNav] = useState(false)

  const [bg, setBg] = useState(false)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setBg(true) : setBg(false)
    })
  })


  return (
    <header className={`${bg ? 'bg-white lg:top-0 shadow-2xl' : 'lg:top-[60px]'}
    fixed py-6 lg:py-4 w-full transition-all z-10`}>
      <motion.div
      variants={variants.fadeInDown}
      initial='initial'
      whileInView={'animate'}
      viewport={{ once: true }}
      className="container mx-auto flex justify-between items-center">
        <Link 
        to="/"
        spy={true}
        className="cursor-pointer"
        >
          <img src={logo} alt="logo" />
        </Link>

        <div className="hidden lg:flex">
          <Nav />
        </div>

        <button className="btn btn-sm btn-outline hidden lg:flex">
          {btnText}
        </button>

        <button 
        onClick={() => setShowNav(prev => !prev)}
        className="lg:hidden text-3xl text-accent">
          {
            showNav ? <HiOutlineX /> : <HiMenuAlt4 />
          }
        </button>


        <div className={`${showNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all `}>
          <NavMobile />
        </div>
      </motion.div>
    </header>
  )
}

export default Header