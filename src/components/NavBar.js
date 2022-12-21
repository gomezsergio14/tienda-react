import CartWidget from "./CartWidget";

function NavBar(){
    const miColor={
        color: "#6e45c7",
    };
    return(
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO<span style={miColor}>3D</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Impresoras 3D</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Filamentos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Repuestos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><CartWidget /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;