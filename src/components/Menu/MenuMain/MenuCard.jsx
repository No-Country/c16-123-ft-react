import { Card } from "react-bootstrap"
import "./MenuMain.css"
import { Link } from "react-router-dom";
import imagenPizzaDemo from "../../../assets/pizzas-predeterminadas/pizza-napolitana.png";
const MenuCard = ({ nombrePizza }) => {
    console.log(nombrePizza);
    return (
        <Card className="card-background menu-card">
            <div className="card-img-body">
                <Card.Img src={imagenPizzaDemo} className="card-image" />
                <Card.Body className="menu-card-body">
                    <Card.Title className="m-0 menu-card-text texto-amarillo">{nombrePizza}</Card.Title>
                    <p className="menu-card-description">(TODO)Ingredientes</p>
                </Card.Body>
            </div>
            <div className="menu-card-select">
                <Link className="menu-card-button texto-blanco" >Ordenar</Link>
                {/* <Link className="menu-card-button texto-blanco" >Customizar</Link> */}

            </div>
        </Card >
    )
}

export default MenuCard