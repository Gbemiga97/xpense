import { Swiper, SwiperSlide } from "swiper/react"
import {Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'





const ClientSlider = ({clients}) => {
  return (
    <Swiper 
    slidesPerView={1}
    spaceBetween={30}
    grabCursor={true}
    pagination={{
        clickable: true
    }}
    autoplay={true}
    modules={[Pagination, Autoplay]}
    breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0
          },
        1170 : {
            slidesPerView: 3,
            spaceBetween: 30
          }
    }}
    className="test"
    >
        {
            clients.map(({message, name, position, image, borderColor}, i) => (
                <SwiperSlide
                style={{borderColor: borderColor}}
                className="border-t-[10px] rounded-t-[12px]"
                key={i} >
                    <div className="w-full mx-auto lg:max-w-[300px] xl:max-w-[350px]
                    h-[250px] rounded-[12px] border border-grey py-6 px-[1.8rem]">
                        <p className="font-primary mb-12 font-light">
                          {message}</p>

                        <div className="flex gap-x-[10px]">
                            <img src={image} alt={name} />
                            <h5 className='font-bold'>{name},</h5>
                            <p className="text-light">{position}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default ClientSlider