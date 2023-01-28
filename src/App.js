// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';
import { CartProvider } from './storage/cartContext';


function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer text="Bienvenido a la tienda"/>}/>
        <Route path='categoria/:nombreCategoria' element={<ItemListContainer text="Bienvenido a la tienda"/>}/>
        <Route path='detalle/:id' element={< ItemDetailContainer />} />
        <Route path='carrito' element={< Carrito />} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
