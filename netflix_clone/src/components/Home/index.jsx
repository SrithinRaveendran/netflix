import './index.css'
import { MyContext } from '../context'
import { useContext } from 'react'

import CategoryButton from '../categorybutton'

const Home = () => {
    const { name } = useContext(MyContext)
    console.log(name)
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

                <p>hi </p>

            </div>


            {/* <p className='mainword'>home page ready soon</p> */}
        </div>
    )
}

export default Home