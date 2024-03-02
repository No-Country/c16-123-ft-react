import {setMasa} from '../../../services/customService'
import { Card, Col, Row } from 'react-bootstrap'

import masa_normal_png from "../../../assets/masa_normal.png"
import masa_integral_png from "../../../assets/masa_integral.png"
import masa_sin_tacc_png from "../../../assets/masa_sin_tacc.png"
import { useNavigate } from "react-router-dom"

import ButtonSections from '../buttonSections/ButtonSections'
import PropTypes from 'prop-types';


Masas.propTypes = {
    pizzaname: PropTypes.string.isRequired,
}

export default function Masas({pizzaname}) {

    const navigate = useNavigate();
    function navigateToSalsas(){
        navigate(`/customslice/pizzaname/${pizzaname}/salsas`, {replace:true});
        {/** navigate("customslice/pizzaname/peperoni/quesos", {replace:true});*/}
    }
    function changeMasa(event){
        let type = event.currentTarget.id;
        setMasa(type);
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
                <Card style={{ width: '18rem' }} id="normal" onClick={changeMasa}>
                    <Card.Img variant="top" src={masa_normal_png} />
                    <Card.Body >
                        <Card.Title>Normal</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="integral" onClick={changeMasa}>
                    <Card.Img variant="top" src={masa_integral_png} />
                    <Card.Body>
                        <Card.Title>Integral</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="sin tacc" onClick={changeMasa}>
                    <Card.Img variant="top" src={masa_sin_tacc_png} />
                    <Card.Body>
                        <Card.Title>Sin T.A.C.C</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <ButtonSections legend={"Salsas"} action={navigateToSalsas}/>
    </>
  )
}
