import { Container } from "react-bootstrap"
import MenuCard from "./MenuCard"
import { Link } from "react-router-dom"

const MenuMain = () => {
    return (
        <div id="menuMain" className="enable-scroll">
            <h2 id="menuTitle" className="texto-blanco marca-underline">Nuestras Pizzas</h2>
            <Link to={"/customslice/pizzaname/:pizzaname/"} className="d-flex mx-auto mb-4 texto-blanco menu-button-custom">Pizza Customizada</Link>

            <Container id="menuCards">
                <MenuCard nombrePizza="Pizza Napolitana" />
                <MenuCard nombrePizza="Pizza Americana" />
                <MenuCard nombrePizza="Pizza Calabresa" />
                <MenuCard nombrePizza="Pizza Margarita" />
                <MenuCard nombrePizza="Pizza Napolitana" />
                <MenuCard nombrePizza="Pizza Americana" />
                <MenuCard nombrePizza="Pizza Calabresa" />
                <MenuCard nombrePizza="Pizza Margarita" />
            </Container>

        </div>
    )
}

export default MenuMain