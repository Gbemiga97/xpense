import { HiCheck, HiOutlineArrowNarrowRight} from "react-icons/hi"
import { data, variants } from "../utils"
import { useState } from "react"
import { motion } from "framer-motion"



const Pricing = () => {

  const {title, cards, } = data.pricing

  const [index, setIndex] = useState(1)

  return (
    <section className="section">
      <motion.div 
      variants={variants.staggerContainer}
      initial='initial'
      whileInView={'animate'}
      viewport={{once:true}}
      className="container mx-auto">

        <motion.h2
        variants={variants.fadeInUp}
        className="h2 mb-10 lg:mb-20 text-center">
          {title}</motion.h2>

          <div className="flex flex-col lg:flex-row lg:gap-x-[1.8rem] gap-y-[1.8rem] lg:gap-y-0
          justify-center items-center">
            {
              cards.map(({icon, title, services, price, userAmount, btnText, delay}, i) => (
                <motion.article
                variants={variants.fadeInUp}
                onClick={() => setIndex(i)}
                key={i}>
                  <div className={`${index === i ? 'shadow-2xl' : 'border border-grey'}
                  w-[350px] h-[500px] rounded-[12px] p-[40px] cursor-pointer transition-all`}>

                    <div className="mb-8">
                      <img src={icon} alt={title} />
                    </div>

                     <h3 className="text-[2rem] font-semibold mb-8">
                      {title}</h3>

                     <ul className="flex flex-col gap-y-2 mb-6">
                      {
                        services.map(({name}, Si) => (
                          <li
                          className="flex items-center gap-x-[10px]"
                          key={Si}>
                            <HiCheck className="text-light" />
                            {name}
                          </li>
                        ))
                      }
                     </ul>

                     <div className="mb-10">
                      <div >
                        <h6 className="text-2xl font-semibold">
                          {price}/ 
                          <span className="text-xl text-light font-light ">year</span>
                          </h6>
                      </div>
                      <small className="text-base text-light">
                        {userAmount}</small>
                     </div>
                     <button className={`${index === i ? 'bg-accent hover:bg-accentHover text-white' : 
                    'border border-accent text-accent'} btn btn-sm gap-x-4`}>
                      {btnText}
                      <HiOutlineArrowNarrowRight />
                     </button>
                  </div>
                </motion.article>
              ))
            }
          </div>
      </motion.div>
    </section>
  )
}

export default Pricing