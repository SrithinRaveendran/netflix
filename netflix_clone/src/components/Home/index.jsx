import './index.css'
import { MyContext } from '../context'
import { useContext } from 'react'
import { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import CategoryButton from '../categorybutton'
import Carousel from '../carousel';

import { fetchTrendingMovies } from '../tmdb';

// tmdbGenres.js

 const tmdb_genre_list = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
];

const Home = () => {
    const { name, movieData, setMovieData } = useContext(MyContext)
    console.log(name)

    useEffect(() => {

        async function getmovie(){
            const data = await fetchTrendingMovies()
            setMovieData(data)
        }
        getmovie()

    }, [])

    return (
        <div className='background-home'>
            <div className='homeNavBar'>
                <h2 className='mainword' >For {name == "" ? "Guest" : name}</h2>
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

         
                <>
                    <h2 className="categoryHeading"> Movie</h2>
                        <Carousel movieData = {movieData}/>
                        <h2 className="categoryHeading"> Movie</h2>
                        <Carousel movieData = {movieData}/>
                        <h2 className="categoryHeading"> Movie</h2>
                        <Carousel movieData = {movieData}/>
                </>

            </div>
        </div>
    )
}

export default Home