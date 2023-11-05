import { motion } from "framer-motion"
import { data, variants } from "../utils"

const Features2 = () => {

  const {pretitle, title, subtitle, btnLink, btnIcon, image} = data.features.feature2
  


  return (
    <section className="section mb-12 lg:mb-0">
    <div className="container mx-auto">
      <motion.div 
      variants={variants.staggerContainer}
      initial='initial'
      whileInView={'animate'}
      viewport={{once: true}}
      className="flex flex-col lg:flex-row-reverse items-center gap-y-12 lg:gap-y-0 lg:gap-x-[1.8rem]">

        <motion.div 
        variants={variants.fadeInLeft}
        className="flex-1 text-center lg:text-start flex justify-center items-center flex-col lg:items-start ">
          <p className="pretitle">
            {pretitle}</p>
          <h1 className="title">
            {title}</h1>
          <p className="lead">
            {subtitle}</p>
          <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
            {btnLink}
            <img src={btnIcon} alt="arrow_right" />
            </button>
        </motion.div>

        <motion.div 
        variants={variants.fadeInRight}
        className="flex-1">
          <img src={image} alt="avatar" />
        </motion.div>
      </motion.div>
    </div>
  </section>
  )
}

export default Features2