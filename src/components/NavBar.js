import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar(){
    const miColor={
        color: "#6e45c7",
    };
    return(
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">LOGO<span style={miColor}>3D</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="categoria/impresora">Impresoras 3D</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="categoria/filamentos">Filamentos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="categoria/repuestos">Repuestos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="carrito"><CartWidget /></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;