import { data, variants } from "../utils"
import { motion } from "framer-motion"

const Brands = () => {

  const {brands} = data.overview



  return (
    <section className="py-9">
      <motion.div 
      variants={variants.staggerContainer}
      initial='initial'
      whileInView={'animate'}
      viewport={{ once: true }}
      className="container mx-auto flex flex-col md:flex-row md:gap-x-6 justify-between items-center space-y-6 ">
        {
          brands.map(({image}, i) => (
            <motion.div
            className="flex items-center justify-center"
            variants={variants.fadeInUp}
            key={i}>
              <img src={image} alt="brand" />
            </motion.div>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Brands