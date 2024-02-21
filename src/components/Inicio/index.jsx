import NavBar from '../Navbar'
import Main from './Main'

const Inicio = ({login, setLogin}) => {

    function openLogin(){
        setLogin(true)
        console.log(login)
    }
    return (
        <>
            <NavBar setLogin={setLogin}></NavBar>
            <Main login={login} openLogin={openLogin}></Main>
        </>
    )
}

export default Inicio