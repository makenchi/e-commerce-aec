import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<div className='text-center text-danger'>Page not found!</div>} />
      </Routes>
    </Fragment>    
  );
}

export default App;
