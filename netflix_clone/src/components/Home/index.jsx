import './index.css'
import { MyContext } from '../context'
import { useContext } from 'react'
import { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import CategoryButton from '../categorybutton'

const Home = () => {
    const { name, movieData, setMovieData } = useContext(MyContext)
    console.log(name)

    useEffect(() => {
        const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlkYmM3Yjc4YmJhZDZjNjI4NWI3MTI4MTU4MWRhMiIsIm5iZiI6MTc2Njg0MDc2My42NDQsInN1YiI6IjY5NGZkOWJiYzM4YzMxYTJjZjdhYzA5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PYuY3VdjKvm4JpYHm2PaIMb-MxI3-HnrvPdsBAElX1o'; // Use the Read Access Token here
        const BASE_URL = 'https://api.themoviedb.org/3';
        async function fetchTrendingMovies() {
            try {
                const response = await fetch(`${BASE_URL}/trending/movie/day`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${API_TOKEN}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data.results);
                setMovieData(data.results)// This will show the list of trending movies
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }

        fetchTrendingMovies();
    }, [])

    return (
        <div className='background-home'>
            <div className='homeNavBar'>
                <p className='mainword' >For {name == "" ? "Guest" : name}</p>
                <div className='navbarSymbolContainer'>
                    <span class="material-symbols-outlined icons">
                        cast
                    </span>

                    <span class="material-symbols-outlined icons" >
                        download_2
                    </span>

                    <span class="material-symbols-outlined icons">
                        search
                    </span>
                </div>
            </div>

            <div className='mainArea'>
                <div className='stickyContainer'>
                    {/* button and button container */}
                    <CategoryButton name="Category" />
                    <CategoryButton name="Movie" />
                </div>
                <div className='couDIV'>
                    <Swiper
                        className='swipermainborder'
                        spaceBetween={15}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {movieData && movieData.map(each => {
                            return (
                                <SwiperSlide className='swiperborder' key={each.title}>
                                    <img className='courimq' src={"https://image.tmdb.org/t/p/" + "w500" + each.poster_path} alt={each.title} />
                                </SwiperSlide>
                            )
                        })}


                        {/* <SwiperSlide className='swiperborder'>
                            <img className='courimq' src='/Fight_Club.png' alt="fight club" />
                        </SwiperSlide>
                        <SwiperSlide className='swiperborder'>
                            <img className='courimq' src='/Fight_Club.png' alt="fight club" />
                        </SwiperSlide>
                        <SwiperSlide className='swiperborder'>
                            <img className='courimq' src='/Fight_Club.png' alt="fight club" />
                        </SwiperSlide>
                        <SwiperSlide className='swiperborder'>
                            <img className='courimq' src='/Fight_Club.png' alt="fight club" />
                        </SwiperSlide> */}
                    </Swiper>
                </div>

            </div>



        </div>
    )
}

export default Home