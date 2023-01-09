// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer text="Bienvenido a la tienda"/>
    </div>
  );
}

export default App;
