import "./customPizzaDynamic.css"

import PropTypes from 'prop-types';

import Salsas from "../salsas/Salsas";
import Masas from "../masas/Masas";
import Quesos from "../quesos/Quesos";
import Ingredientes from "../ingredientes/Ingredientes";


CustomPizzaDynamic.propTypes = {
    pizzaname: PropTypes.string.isRequired,
    titleSection: PropTypes.string.isRequired,
}

function CustomPizzaDynamic({pizzaname, titleSection}) {

   {/* const navigate = useNavigate();

    *function navigateTo(){
      let section = titleSection.toLowerCase()
        navigate(`/customslice/pizzaname/${pizzaname}/${section}`, {replace:true});
        {/** navigate("customslice/pizzaname/peperoni/quesos", {replace:true});
    } */}

    if(titleSection == "Masas"){
        return (
            <div  className="comp_masas">
              <h3>{titleSection}</h3>
              <Masas pizzaname={pizzaname}/>
            </div>
          );
    }else if(titleSection == "Salsas"){
        return (
            <div  className="comp_masas">
              <h3>{titleSection}</h3>
              {/**<Salsas navigateto={navigateTo}/> */}
              <Salsas pizzaname={pizzaname}/>
            </div>
          );
    }else if(titleSection == "Ingredientes"){
      return (
          <div  className="comp_masas">
            <h3>{titleSection}</h3>
            <Ingredientes pizzaname={pizzaname}/>
          </div>
        );
    }else if(titleSection == "Quesos"){
      return (
          <div  className="comp_masas">
            <h3>{titleSection}</h3>
            <Quesos pizzaname={pizzaname}/>
          </div>
        );
    }
}

export default CustomPizzaDynamic