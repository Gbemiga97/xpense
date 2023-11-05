import { data, variants } from "../utils"
import {HiOutlineChevronDown} from 'react-icons/hi'
import { motion } from "framer-motion"


const Hero = () => {

  const {title, subtitle, btnText, compText, image} = data.hero

  return (
    <section className="min-h-[900px] py-12">
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <motion.div 
        variants={variants.staggerContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: true }}
        className="flex flex-col lg:gap-x-[1.8rem] gap-y-8 lg:gap-y-0 lg:flex-row
        items-center justify-center text-center lg:text-left">

          <motion.div
          variants={variants.fadeInDown}
          className="flex-1">
            <h1 className="title mb-2 lg:mb-5">
              {title}</h1>
              <p className="lead mb-5 lg:mb-10">
                {subtitle}</p>

                <div className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6">
                  <button className="btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4">
                    {btnText}
                    <HiOutlineChevronDown />
                  </button>
                  <span className="text-light lg:lead lg:mb-0">
                    {compText}</span>
                </div>
          </motion.div>
           
           <motion.div 
           variants={variants.fadeInUp}
           className="flex-1">
            <img src={image} alt="hero" />
           </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero