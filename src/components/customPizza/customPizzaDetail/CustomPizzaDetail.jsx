import {getCustomPizza} from '../../../services/customService'

import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import './customPizzaDetail.css'

import napolitana_custom_png from '../../../assets/napolitana_custom.png';

import PropTypes from 'prop-types';

CustomPizzaDetail.propTypes = {
    pizzaname: PropTypes.string.isRequired,
}

export default function CustomPizzaDetail({pizzaname}) {

    const customPizza = getCustomPizza();
    

    function confirmarPedido(){
        console.log("confirmar");
    }

    function ingredientesString(){
      let ingredientes = "";
      customPizza.ingredientes.forEach(ingrediente => {
        let insert = ingrediente+ ", ";
        ingredientes += insert;
      })
      return ingredientes;
    }

  return (
    <>
        <Row>
          <Col className='pizza'>
            <img className="img_pizza" src={napolitana_custom_png}></img>
            <h2 className='pizzaname'>{pizzaname}</h2>
          </Col>
          <Col>
            <h2>Detalles del pedido</h2>

            <ListGroup horizontal>
                <ListGroup.Item className='list_title'>Masa</ListGroup.Item>
                <ListGroup.Item>{customPizza.masa}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item className='list_title'>Salsa</ListGroup.Item>
                <ListGroup.Item>{customPizza.salsa}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item className='list_title'>Ingredientes</ListGroup.Item>
                <ListGroup.Item>{ingredientesString()}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item className='list_title'>Queso</ListGroup.Item>
                <ListGroup.Item>{customPizza.queso}</ListGroup.Item>
            </ListGroup>
            <Button className='btn_confirm' onClick={confirmarPedido}>Confirmar pedido</Button>
          </Col>
        </Row>
    </>
  )
}
