import { ClientSlider } from "../components"
import { data, variants } from "../utils"
import { motion } from "framer-motion"

const Testimonials = () => {

  const {title, clients} = data.testimonials

  return (
    <section className="section">
      <motion.div 
      variants={variants.staggerContainer}
      initial='initial'
      whileInView={'animate'}
      viewport={{ once: true }}
      className="container mx-auto">

        <motion.h2
        variants={variants.fadeInUp}
        className="title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto">
          {title}
        </motion.h2>

        <motion.div 
        variants={variants.fadeInUp}
        >
          <ClientSlider clients={clients} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Testimonials