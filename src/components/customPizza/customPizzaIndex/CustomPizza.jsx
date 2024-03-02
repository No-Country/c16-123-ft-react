import './customPizza.css'

import { Button, Col, Row } from "react-bootstrap";


import napolitana_custom_png from '../../../assets/napolitana_custom.png';
import { Link, useNavigate } from 'react-router-dom';

export default function CustomPizza() {
    const navigate = useNavigate();

    function navigateToCarrito(){
        console.log("navigate")
        navigate("/customslice/carrito", {replace:true});
    }

  return (
    <>
    <Row className='row_custom_index'>
        <Col>
          <img className="img_pizza" src={napolitana_custom_png}></img>
        </Col>
        <Col className='col_custom'>
            <Button className='btn_masas'>
                <Link to={"masas"}>Masas</Link>
            </Button>

            <Button className='btn_salsas'>
                <Link to={"salsas"}>Salsas</Link>
            </Button>

            <Button className='btn_ingredientes'>
                <Link to={"ingredientes"}>Ingredientes</Link>
            </Button>

            <Button className='btn_quesos'>
                <Link to={"quesos"}>Quesos</Link>
            </Button>

            <Button className='btn_continuar' onClick={navigateToCarrito}>Continuar</Button>
        </Col>
      </Row>
    </>
  )
}
