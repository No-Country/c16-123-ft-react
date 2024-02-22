import './index.css';
import { Link } from "react-router-dom";

const NavBar = ({setLogin}) => {
    return (
        <nav id="navbar">
        <Link href="#inicio" className="texto-blanco marca-underline" to="/">
            <span className="texto-marca-custom">Custom</span>
            <span className="texto-marca-slice texto-amarillo">Slice</span>
        </Link>
            <div id="nav-links">
                <ul id="nav-ulist">
                    {/* <li>
                        <Link href="#inicio" 
                        className="texto-blanco nav-texto nav-custom-link" 
                        onClick={()=>setLogin(false)} to="/"> Inicio</Link>
                    </li> */}
                    {/* <li>
                        <Link href="#menu" 
                        className="texto-blanco nav-texto nav-custom-link" 
                        // TOMAS: hasta que este terminado el menú, clickear este botón te va a llevar a el login
                        onClick={()=>setLogin(true)} to="/"> Menú</Link>
                    </li> */}
                </ul >
                <Link href="#login" 
                className="texto-blanco background-primary-yellow rounded nav-texto nav-boton boton-primary" onClick={()=>setLogin(true)} to="/"> Iniciar Sesión</Link>
                {/* TOMAS: Botón coulto hasta que la pagina de registro este completa 
                <Link href="#registro" 
                className="texto-blanco background-night-yellow rounded nav-texto nav-boton boton-night" to="/registro" > Registrarme</Link>
                 */}
            </div>

        </nav >
    )
}

export default NavBar;