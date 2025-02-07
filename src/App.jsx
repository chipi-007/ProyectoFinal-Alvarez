import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import ItemDetalles from './components/ItemDetalles/ItemDetalles';


const App = () => {


  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/producto/:id' element = {<ItemDetalles/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App