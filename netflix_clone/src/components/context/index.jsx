import { createContext, useState } from 'react'

const MyContext = createContext()

export function MyContextProvider({ children }) {
    const [name, setName] = useState("")
    return (
        <MyContext.Provider value={{ name, setName }}>
            {children}
        </MyContext.Provider>
    )

}

export { MyContext }