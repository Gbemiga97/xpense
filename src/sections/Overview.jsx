import { data, variants } from "../utils"
import { motion } from "framer-motion"

const Overview = () => {

  const {productImg, brands} = data.overview

  return (
    <section className="min-h-[400px] lg:min-h-[712px] bg-overview bg-cover bg-left-top
    pt-[1.8rem] lg:pt-[87px]">
      <motion.div
      variants={variants.fadeInUp}
      initial='initial'
      whileInView={'animate'}
      viewport={{ once: true }}
      className="container mx-auto flex justify-end overflow-hidden">
        <img src={productImg} alt="product" />
      </motion.div>
    </section>
  )
}

export default Overview