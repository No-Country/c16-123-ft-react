import { Nav, Navbar } from "react-bootstrap";
import './index.css';

const NavBar = () => {
    return (
        <nav id="navbar">
            <Link href="#inicio" className="texto-blanco marca-underline" to="/">
                <span className="texto-marca-custom">Custom</span>
                <span className="texto-marca-slice texto-amarillo">Slice</span>
            </Link>
            <div id="nav-links">
                <ul id="nav-ulist">
                    <li>
                        <Link href="#inicio" className="texto-blanco nav-texto nav-custom-link" to="/"> Inicio</Link>
                    </li>
                    <li>
                        <Link href="#menu" className="texto-blanco nav-texto nav-custom-link" to="/"> Menú</Link>
                    </li>
                </ul >
                <Link href="#login" className="texto-blanco background-dark-yellow rounded nav-texto nav-boton" to="/" > Iniciar Sesión</Link>
                <Link href="#registro" className="texto-blanco background-night-yellow rounded nav-texto nav-boton" to="/registro" > Registrarme</Link>
            </div>

        </nav >
    )
}

export default NavBar;