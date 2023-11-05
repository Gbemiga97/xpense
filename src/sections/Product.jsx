import { Cards } from "../components"
import { data, variants } from "../utils"
import { motion } from "framer-motion"

const Product = () => {

  const {title, subtitle, cards} = data.product

  return (
    <section className="section">
      <div className="container mx-auto">

        <motion.div 
        variants={variants.fadeInUp}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center lg:text-start lg:flex-row mb-10 lg:mb-20">
          <h1 className="section-title">
            {title}</h1>
            <p className="lead lg:max-w-[350px]">
              {subtitle}</p>
        </motion.div>

        <Cards cards={cards} />
      </div>
    </section>
  )
}

export default Product