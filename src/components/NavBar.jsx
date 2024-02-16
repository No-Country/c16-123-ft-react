import { Nav, Navbar } from "react-bootstrap"
import './css/NavBar.css'

const NavBar = () => {
    return (
        <Navbar className="d-flex mx-5 px-5 mt-3 justify-content-between" fixed="top">
            <Navbar.Brand href="#inicio" className="texto-blanco marca-underline pb-0"><span className="texto-marca-custom">Custom</span> <span className="texto-marca-slice texto-amarillo">Slice</span></Navbar.Brand>

            <Nav>
                <Nav.Link href="#inicio" className="texto-blanco mx-2 texto-nav">Inicio</Nav.Link>
                <Nav.Link href="#menu" className="texto-blanco mx-2 texto-nav">Menú</Nav.Link>
                <Nav.Link href="#login" className="texto-blanco mx-2 background-light-yellow rounded texto-nav">Iniciar Sesión</Nav.Link>
                <Nav.Link href="#registro" className="texto-blanco mx-2 background-dark-yellow rounded texto-nav">Registrarme</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar