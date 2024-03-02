import {setQueso} from '../../../services/customService'

import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import mozarella_png from "../../../assets/mozarella.png"
import cheddar_png from "../../../assets/cheddar.png"
import queso_cremoso_png from "../../../assets/queso_cremoso.png"
import ButtonSections from '../buttonSections/ButtonSections';

Quesos.propTypes = {
    pizzaname: PropTypes.string.isRequired,
}
export default function Quesos({pizzaname}) {
  const navigate = useNavigate();
  function navigateToDetallesDelPedido(){
    navigate(`/customslice/pizzaname/${pizzaname}/detail`, {replace:true});
      {/** navigate("customslice/pizzaname/peperoni/quesos", {replace:true});*/}
  }

  function changeQueso(event){
    let type = event.currentTarget.id;
    setQueso(type);
    drawSelected(type);
  }

  function drawSelected( type){
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        card.classList.remove("selected");
        if(card.id == type){
            card.classList.add("selected");
        }
    });
}
  return (
    <>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }} id="Mozarella" onClick={changeQueso}>
              <Card.Img variant="top" src={mozarella_png} />
              <Card.Body>
                  <Card.Title>Mozarella</Card.Title>
              </Card.Body>
          </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }} id="Cheddar" onClick={changeQueso}>
                <Card.Img variant="top" src={cheddar_png} />
                <Card.Body>
                    <Card.Title>Cheddar</Card.Title>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card style={{ width: '18rem' }} id="Queso cremoso" onClick={changeQueso}>
                <Card.Img variant="top" src={queso_cremoso_png} />
                <Card.Body>
                    <Card.Title>Queso cremoso</Card.Title>
                </Card.Body>
            </Card>
        </Col>
      </Row>
      <ButtonSections legend={"Finalizar"} action={navigateToDetallesDelPedido}/>
    </>
  )
}
