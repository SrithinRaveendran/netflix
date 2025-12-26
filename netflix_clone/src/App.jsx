import './App.css'
import React from 'react'
import FrontPage from './components/FrontPage'
import Home from './components/Home'
import { MyContextProvider } from './components/context'


import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <MyContextProvider>
      <Routes>
        <Route path="/" element = {<FrontPage/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </MyContextProvider>
    </BrowserRouter>
  )
}

export default App
