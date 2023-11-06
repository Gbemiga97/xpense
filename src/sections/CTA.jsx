import { data, variants } from "../utils"
import {HiOutlineChevronDown} from 'react-icons/hi'
import { motion } from "framer-motion"


const CTA = () => {

  const {title, subtitle, btnText, img1, img2} = data.cta

  return (
    <section className="section bg-cta bg-cover bg-left-top">
      <div className="container mx-auto  px-[25px]">
        <motion.div
        variants={variants.fadeInUp}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: true }}
         className="max-w-[920px] mx-auto text-center">
          <h2 className="h2 text-white mb-6">
            {title}
          </h2>
          <p className="text-2xl lg:text-4xl text-white">
            {subtitle}
          </p>
        </motion.div>

        <div className="flex justify-between">
          <motion.img 
          initial={{ opacity: 0, scale: 1.5, x: -100 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden xl:flex"
          src={img1} alt="avatar" />

          <motion.button 
             variants={variants.fadeInUp}
             initial='initial'
             whileInView={'animate'}
             viewport={{ once: true }}
          className="btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto">
            {btnText} <HiOutlineChevronDown />
          </motion.button>

          <motion.img
          initial={{ opacity: 0, scale: 1.5, x: 100 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden xl:flex"
          src={img2} alt="avatar" />
        </div>
      </div>
    </section>
  )
}

export default CTA