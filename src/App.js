// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer text="Bienvenido a la tienda"/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
