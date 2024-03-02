import {setSalsa} from '../../../services/customService'
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import salsa_sin_cebolla_png from "../../../assets/salsa_sin_cebolla.png"
import salsa_con_cebolla_png from "../../../assets/salsa_con_cebolla.png"
import sin_salsa_png from "../../../assets/sin_salsa.png"
import ButtonSections from '../buttonSections/ButtonSections';

{/* navigateTo: PropTypes.PropType.func.isRequired,*/}
Salsas.propTypes = {
    pizzaname: PropTypes.string.isRequired,
}

export default function Salsas({pizzaname}) {

    const navigate = useNavigate();
    function navigateToIngredientes(){
        navigate(`/customslice/pizzaname/${pizzaname}/ingredientes`, {replace:true});
        {/** navigate("customslice/pizzaname/peperoni/quesos", {replace:true});*/}
    }

    function changeSalsa(event){
        let type = event.currentTarget.id;
        setSalsa(type)
        drawSelected(type)
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
                <Card style={{ width: '18rem' }} id="sin cebolla" onClick={changeSalsa}>
                    <Card.Img variant="top" src={salsa_sin_cebolla_png} />
                    <Card.Body>
                        <Card.Title>Salsa sin cebolla</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="con cebolla" onClick={changeSalsa}>
                    <Card.Img variant="top" src={salsa_con_cebolla_png} />
                    <Card.Body>
                        <Card.Title>Salsa con cebolla</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="sin salsa" onClick={changeSalsa}>
                    <Card.Img variant="top" src={sin_salsa_png} />
                    <Card.Body>
                        <Card.Title>Sin salsa</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <ButtonSections legend={"Ingredientes"} action={navigateToIngredientes}/>
    </>
  )
}
