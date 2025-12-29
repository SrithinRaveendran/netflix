import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = (props) => {
    const { movieData } = props
    return (
        <div className='carouselConatiner'>
            <Swiper
                className='swiperMainContainer'
                spaceBetween={15}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {movieData && movieData.map(each => {
                    return (
                        <SwiperSlide className='swiperImgContainer' key={each.title}>
                            <img className='swiperImg' src={"https://image.tmdb.org/t/p/" + "w500" + each.poster_path} alt={each.title} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Carousel