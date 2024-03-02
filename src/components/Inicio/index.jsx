import NavBar from '../Navbar'
import Main from './Main'

const Inicio = ({ login, setLogin, logged, setLogged }) => {
    console.log("Inicio->logged: " + logged);
    function openLogin() {
        setLogin(true)
        console.log(login)
    }

    return (
        <>
            <NavBar setLogin={setLogin} logged={logged} setLogged={setLogged}></NavBar>
            <Main login={login} openLogin={openLogin} logged={logged} setLogged={setLogged}></Main>
        </>
    )
}

export default Inicio