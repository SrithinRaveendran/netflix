import './App.css'
import React from 'react'
import FrontPage from './components/FrontPage'

import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<FrontPage/>}/>
        {/* <Route path='/s' element={<FrontPage/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
