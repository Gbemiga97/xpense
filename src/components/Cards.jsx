import { useState } from "react"
import { images, variants } from "../utils"
import { motion } from "framer-motion"

const Cards = ({cards}) => {

  const [index, setIndex] = useState(1)



  return (
    <motion.div
    variants={variants.staggerContainer}
    initial='initial'
    whileInView={'animate'}
    className="flex flex-col gap-y-[1.8rem] lg:flex-row lg:gap-x-[1.8rem] ">
      {
        cards.map(({icon, title, subtitle, delay}, i) => (
          <motion.article
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIndex(i)}
          key={i}>
            <div className={`${index === i && 'bg-white shadow-2xl scale-110 '} 
            md:w-[350px] md:h-[350px] w-[350px] h-[350px] flex flex-col justify-center mx-auto items-center sm:w-[300px] sm:h-[300px] 
            p-[65px] text-center rounded-[12px] cursor-pointer duration-300 transition-all`}>

              <div className="mb-6">
                <img src={icon} alt={title} />
              </div>

              <h5 className="mb-3 text-[1.8rem] font-medium">
                {title}</h5>
              <small className="mb-6 text-light">
                {subtitle}</small>
              {
                index === i && <img src={images.ArrowCards} alt='arrow_right' />
              }
            </div>
          </motion.article>
        ))
      }
    </motion.div>
  )
}

export default Cards