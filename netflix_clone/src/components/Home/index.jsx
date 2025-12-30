import './index.css'
import { MyContext } from '../context'
import { useContext } from 'react'
import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import CategoryButton from '../categorybutton'
import Carousel from '../carousel';

import { fetchTrendingMovies } from '../tmdb';



// tmdbGenres.js the below list is comment its importsant for reference don't remove it
// const tmdb_genre_list = [
//     { id: 28, name: "Action" },
//     { id: 12, name: "Adventure" },
//     { id: 16, name: "Animation" },
//     { id: 35, name: "Comedy" },
//     { id: 80, name: "Crime" },
//     { id: 99, name: "Documentary" },
//     { id: 18, name: "Drama" },
//     { id: 10751, name: "Family" },
//     { id: 14, name: "Fantasy" },
//     { id: 36, name: "History" },
//     { id: 27, name: "Horror" },
//     { id: 10402, name: "Music" },
//     { id: 9648, name: "Mystery" },
//     { id: 10749, name: "Romance" },
//     { id: 878, name: "Science Fiction" },
//     { id: 10770, name: "TV Movie" },
//     { id: 53, name: "Thriller" },
//     { id: 10752, name: "War" },
//     { id: 37, name: "Western" },
//];






const Home = () => {
    const { name, movieData, setMovieData } = useContext(MyContext)
    console.log(name)


    const [StateAdventureList, setAdventureList] = useState([])
    const [StateRomanceList, setRomanceList] = useState([])

    useEffect(() => {

        async function getmovie() {
            const data = await fetchTrendingMovies()
            setMovieData(data)
            // console.log(RomanceList,"rom")
        }
        getmovie()

    }, [])

    useEffect(() => {
        //(i feel this is dump idea to use here need to find the another good way)
        // here  i am mapping the each items from the apicall to get adventure movies 
        // only based on the list above which i got from api document
        // so that i can avoid a api to get the genre code details.. later i will make it automate using object

        
        const RomanceList = []
        const adventurefunction = () => {
            const AdventureList = []
            movieData && movieData.map(each => {
                if (each.genre_ids.includes(12)) {
                    AdventureList.push(each)
                }
                
            })
            //remember you canot directly update the state from 
            // useEffect hook its dould be inside the funtion
            console.log('check render')
            setAdventureList(AdventureList)
        }
        adventurefunction()
        // same process to get the romantic movie

        movieData && movieData.map(each => {
            if (each.genre_ids.includes(10749) | (each.genre_ids.includes(18))) {
                RomanceList.push(each)
            }
            setRomanceList(RomanceList)
        })

    }, [movieData])

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
                    <Carousel movieData={movieData} />
                    <h2 className="categoryHeading">Adventure Hits</h2>
                    <Carousel movieData={StateAdventureList} />
                    <h2 className="categoryHeading">Romantic And Drama Hits</h2>
                    <Carousel movieData={StateRomanceList} />
                </>

            </div>
        </div>
    )
}

export default Home