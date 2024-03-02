import './index.css';
import { Link } from "react-router-dom";

const NavBar = ({ setLogin, logged, setLogged }) => {
    console.log("Nav->logged: " + logged);
    return (
        <nav className='fixed-top' id="navbar">
            <Link id="nav-marca" href="#inicio" className="texto-blanco marca-underline" onClick={() => setLogin(false)} to="/inicio">
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
                {
                    logged ? (<Link href="#login" className="texto-blanco background-primary-yellow rounded nav-texto nav-boton boton-primary" onClick={() => { setLogin(false); setLogged(false) }} to="/"> Cerrar Sesión</Link>)
                        : (<Link href="#login" className="texto-blanco background-primary-yellow rounded nav-texto nav-boton boton-primary" onClick={() => { setLogin(true); }} to="/login"> Iniciar Sesión</Link>)
                }
                {/* TOMAS: Botón oculto hasta que la pagina de registro este completa 
                <Link href="#registro" 
                className="texto-blanco background-night-yellow rounded nav-texto nav-boton boton-night" to="/registro" > Registrarme</Link>
                 */}
            </div>

        </nav >
    )
}

export default NavBar;