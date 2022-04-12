import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage, Error } from './pages'

const App = () => {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path='/landing' element={<LandingPage/> }></Route>
          <Route path='/error' element={<Error /> } > </Route>



        </Routes>
    


      </BrowserRouter>
    </div> 
  )
}

export default App