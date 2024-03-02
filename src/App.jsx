import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './components/Inicio/index';
import Registro from './components/Registro/Registro';
import Custom from './components/customPizza/Custom'
import { useState } from 'react';
import Menu from './components/Menu/Menu';

function App() {
  const [login, setLogin] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio login={login} setLogin={setLogin} logged={logged} setLogged={setLogged} />} >
          <Route path="inicio" element={<Inicio login={login} setLogin={setLogin} logged={logged} setLogged={setLogged} />} >
          </Route>
          <Route path="login" element={<Inicio login={login} setLogin={setLogin} logged={logged} setLogged={setLogged} />} >
          </Route>
        </Route>
        <Route path="/registro" element={<Registro login={login} setLogin={setLogin} />} ></Route>
        <Route path="/menu" element={<Menu login={login} setLogin={setLogin} logged={logged} setLogged={setLogged} />} >
        </Route>
        {/**pantallas de personalizar una piza */}
        <Route  path="/customslice/pizzaname/:pizzaname/*" element={<Custom login={login} setLogin={setLogin} logged={logged} setLogged={setLogged}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App