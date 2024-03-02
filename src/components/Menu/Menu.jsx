import NavBar from "../Navbar";
import MenuMain from "./MenuMain/MenuMain";
import "./Menu.css"

const Menu = ({ login, setLogin, logged, setLogged }) => {
    return (
        <>
            <NavBar setLogin={setLogin} logged={logged} setLogged={setLogged}></NavBar>
            <MenuMain></MenuMain>
        </>
    )
}

export default Menu