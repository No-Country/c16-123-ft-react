import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './components/Inicio/index';
import Registro from './components/Registro/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} > </Route>
        <Route path="registro" element={<Registro />} ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App