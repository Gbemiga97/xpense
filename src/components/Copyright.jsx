import { data, variants } from "../utils"
import { motion } from "framer-motion"


const Copyright = () => {

    const {link1, link2, copyText, social} = data.copyright 

  return (
    <motion.div
    variants={variants.fadeInUp}
    initial='initial'
    whileInView={'animate'}
    viewport={{ once: true }}
    className="flex flex-col lg:flex-row items-center gap-y-2 lg:justify-between
    font-primary">
        <div className="flex gap-x-6  text-sm">
            <a
            className="hover:text-accent transition"
            href={link1.href}>{link1.name}</a>
            <a
            className="hover:text-accent transition"
            href={link2.href}>{link2.name}</a>
        </div>

        <small>
        Copyright @ {new Date().getFullYear()} xpence
        </small>

        <ul className="flex gap-x-[12px]">
            {
                social.map(({icon, href}, i) => (
                    <li key={i}>
                       <a href={href}>
                        <img src={icon} alt="icon" />
                       </a>
                    </li>
                ))
            }
        </ul>
    </motion.div>
  )
}

export default Copyright