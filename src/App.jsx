import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import ItemDetalles from './components/ItemDetalles/ItemDetalles';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartProvider } from './Context/CartContex/CartContex';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/producto/:id' element={<ItemDetalles />} />
        <Route exact path='/products/category/:categoria' element={<ItemListContainer />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
