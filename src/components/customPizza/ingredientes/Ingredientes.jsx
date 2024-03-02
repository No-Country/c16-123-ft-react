import './ingredientes.css'
import { addIngrediente,removeIngrediente} from '../../../services/customService'
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

import aceitunas_verdes_png from "../../../assets/aceitunas_verdes.png"
import aceitunas_negras_png from "../../../assets/aceitunas_negras.png"
import albaca_png from "../../../assets/albaca.png"
import tocineta_png from "../../../assets/tocineta.png"
import huevo_png from "../../../assets/huevo.png"
import salchicha_png from "../../../assets/salchicha.png"
import choclo_png from "../../../assets/choclo.png"
import papa_frita_png from "../../../assets/papa_frita.png"
import tomate_cherry_png from "../../../assets/tomate_cherry.png"
import tomate_grande_png from "../../../assets/tomate_grande.png"
import champinones_png from "../../../assets/champiñones.png"
import ButtonSections from "../buttonSections/ButtonSections";

Ingredientes.propTypes = {
    pizzaname: PropTypes.string.isRequired,
    custom: PropTypes.array,

}

export default function Ingredientes({pizzaname}) {
    const navigate = useNavigate();
    function navigateToQuesos(){
        navigate(`/customslice/pizzaname/${pizzaname}/quesos`, {replace:true});
        {/** navigate("customslice/pizzaname/peperoni/quesos", {replace:true});*/}
    }

    function changeIngredient(event){
        let type = event.currentTarget.id;
        if(!event.currentTarget.classList.contains('selected')){
            addIngrediente(type)
        }else{
            removeIngrediente(type)
        }
        drawSelected(event)
    }

    function drawSelected(event){
        event.currentTarget.classList.toggle("selected");
    }
  return (
      <>
       <Row>
            <Col>
                <Card style={{ width: '18rem' }} id="aceitunas verdes" onClick={changeIngredient}>
                    <Card.Img variant="top" src={aceitunas_verdes_png} />
                    <Card.Body>
                        <Card.Title>Aceitunas verdes</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="aceitunas negras" onClick={changeIngredient}>
                    <Card.Img variant="top" src={aceitunas_negras_png} />
                    <Card.Body>
                        <Card.Title>Aceitunas negras</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="albaca" onClick={changeIngredient}>
                    <Card.Img variant="top" src={albaca_png} />
                    <Card.Body>
                        <Card.Title>Albaca</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="tocineta" onClick={changeIngredient}>
                    <Card.Img variant="top" src={tocineta_png} />
                    <Card.Body>
                        <Card.Title>Tocineta</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="huevo" onClick={changeIngredient}>
                    <Card.Img variant="top" src={huevo_png} />
                    <Card.Body>
                        <Card.Title>Huevo</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="salchicha" onClick={changeIngredient}>
                    <Card.Img variant="top" src={salchicha_png} />
                    <Card.Body>
                        <Card.Title>Salchicha</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br></br>
        <Row className="row_2_ingredients">
            <Col>
                <Card style={{ width: '18rem' }} id="choclo" onClick={changeIngredient}>
                    <Card.Img variant="top" src={choclo_png} />
                    <Card.Body>
                        <Card.Title>Choclo</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="papas fritas" onClick={changeIngredient}>
                    <Card.Img variant="top" src={papa_frita_png} />
                    <Card.Body>
                        <Card.Title>Papas Fritas</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="tomates cherry" onClick={changeIngredient}>
                    <Card.Img variant="top" src={tomate_cherry_png} />
                    <Card.Body>
                        <Card.Title>Tomates cherry</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="tomates grandes" onClick={changeIngredient}>
                    <Card.Img variant="top" src={tomate_grande_png} />
                    <Card.Body>
                        <Card.Title>Tomates grandes</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }} id="champiñones" onClick={changeIngredient}>
                    <Card.Img variant="top" src={champinones_png} />
                    <Card.Body>
                        <Card.Title>Champiñones</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <ButtonSections legend={"Quesos"} action={navigateToQuesos}/>

    </>
  )
}
