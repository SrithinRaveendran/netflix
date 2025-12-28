import { createContext, useState } from 'react'

const MyContext = createContext()

export function MyContextProvider({ children }) {
    const [name, setName] = useState("")
    const [movieData,setMovieData] =  useState("")
    return (
        <MyContext.Provider value={{ name, setName,movieData,setMovieData }}>
            {children}
        </MyContext.Provider>
    )

}

export { MyContext }