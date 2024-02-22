import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './components/Inicio/index';
import Registro from './components/Registro/Registro';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio login={login} setLogin={setLogin} />} >
          <Route path="/inicio" element={<Inicio login={login} setLogin={setLogin} />} > 
          </Route>
          <Route path="/login" element={<Inicio login={login} setLogin={setLogin} />} > 
          </Route>
        </Route>
        <Route path="registro" element={<Registro login={login} setLogin={setLogin} />} ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App