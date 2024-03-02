import './custom.css'


import { Route, Routes, useParams } from 'react-router-dom'
import CustomPizza from './customPizzaIndex/CustomPizza'
import CustomPizzaDynamic from './customPizzaDynamic/CustomPizzaDynamic'
import CustomPizzaDetail from './customPizzaDetail/CustomPizzaDetail'
import NavBar from '../Navbar'
{/*import PropTypes from 'prop-types';


Custom.propTypes = {
    logged: PropTypes.bool.isRequired,
    setLogin: PropTypes.element.isRequired,?
    setLogged: PropTypes.element.isRequired,?

}*/}
export default function Custom({setLogin, logged, setLogged}) {
  let params = useParams()
  let pizzaname = params.pizzaname;
  return (
    <>
    <NavBar setLogin={setLogin} logged={logged} setLogged={setLogged}></NavBar>
      <section className='custom'>
        <Routes>
          <Route path="/" element={<CustomPizza/>} />
          <Route path="/masas" element={<CustomPizzaDynamic pizzaname={pizzaname} titleSection= {"Masas"} />} />
          <Route path="/salsas" element={<CustomPizzaDynamic pizzaname={pizzaname} titleSection= {"Salsas"}/>} />
          <Route path="/ingredientes" element={<CustomPizzaDynamic pizzaname={pizzaname} titleSection= {"Ingredientes"}/>} />
          <Route path="/quesos" element={<CustomPizzaDynamic pizzaname={pizzaname} titleSection= {"Quesos"}/>} />
          <Route path="/detail" element={<CustomPizzaDetail  pizzaname={pizzaname}/>} />
        </Routes>
      </section>
    </>
  )
}
