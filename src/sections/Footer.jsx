import { Link } from "react-scroll"
import { data, variants } from "../utils"
import { motion } from "framer-motion"
import { Copyright } from "../components"

const Footer = () => {

  const {logo, links, legal, newsletter, form} = data.footer

  return (
    <footer className="pt-[142px] pb-[60px]">
      <div className="container mx-auto">
        <motion.div 
        variants={variants.staggerFooterContainer}
        initial="initial"
        whileInView={'animate'}
        viewport={{once: true}}
        className="flex flex-col lg:flex-row items-center text-center lg:items-start lg:text-left
        lg:justify-between gap-y-8">

          <motion.div
          variants={variants.fadeInUp}
          >
            <img src={logo} alt="logo" />
          </motion.div>

          <motion.div 
          variants={variants.fadeInUp}
          >
            <h5 className="text-2xl uppercase font-medium mb-6">
            Links
            </h5>
            <ul className="flex flex-col gap-y-3">
              {
                links.map(({name, href}, i) => (
                  <li key={i}>
                    <Link
                    to={href}
                    spy={true}
                    className="cursor-pointer font-medium hover:text-accent transition"
                    >
                    {name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </motion.div>


          <motion.div 
          variants={variants.fadeInUp}
          >
            <h5 className="text-2xl uppercase font-medium mb-6">
            Legal
            </h5>
            <ul className="flex flex-col gap-y-3">
              {
                legal.map(({name, href}, i) => (
                  <li key={i}>
                    <Link
                    to={href}
                    spy={true}
                    className="cursor-pointer font-medium hover:text-accent transition"
                    >
                    {name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </motion.div>

           
           <motion.div
           variants={variants.fadeInUp}
           >
            <h5 className="text-2xl uppercase font-medium mb-6">
              {newsletter.title}</h5>
            <p className="text-xl text-light mb-[1.2rem]">
              {newsletter.subtitle}</p>


            <form className="max-w-[349px] mb-[10px]" >
              <div className="h-[3.8rem] p-[7px] flex border border-dark rounded-lg">
                <input 
                className="w-full h-full pl-6 border-none outline-none placeholder:text-dark"
                placeholder={form.placeholder}
                type="text" />
                <button className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white">
                  {form.btnText}</button>
              </div>
            </form>
            <small className="text-sm text-light">
              {form.smallText}</small>
           </motion.div>
        </motion.div>

        <hr  className="mt-10 mb-5"/>


        <Copyright />
      </div>
    </footer>
  )
}

export default Footer