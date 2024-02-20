import { Route, Routes } from 'react-router';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './components/Inicio';
import Registro from './components/Registro/Registro';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} >
          <Route index element={<Inicio />} ></Route>
          <Route path="registro" element={<Registro />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App