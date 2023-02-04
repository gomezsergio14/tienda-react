// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './storage/cartContext';
import CartContainer from './components/CartContainer';
// import { exportArray } from './services/firebase';


function App() {
  return (
    <div>
      {/* <button onClick={exportArray}>Cargar productos</button> */}
      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer text="Bienvenido a la tienda"/>}/>
        <Route path='/categoria/:nombreCategoria' element={<ItemListContainer text="Bienvenido a la tienda"/>}/>
        <Route path='/detalle/:id' element={< ItemDetailContainer />} />
        <Route path='/categoria/:nombreCategoria/detalle/:id' element={< ItemDetailContainer />} />
        <Route path='/cart' element={< CartContainer />} />
        <Route path='/detalle/:id/cart' element={< CartContainer />} />
        <Route path='/categoria/:nombreCategoria/detalle/:id/cart' element={< CartContainer />} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
