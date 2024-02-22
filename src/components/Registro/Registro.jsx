import { Link } from "react-router-dom";
import NavBar from '../Navbar'

const Registro = ({login, setLogin}) => {
  return (
    <>
      <NavBar login={login} setLogin={setLogin} ></NavBar>
    </>
  )
}

export default Registro