import { Link } from 'react-router-dom';
import './index.css';
import "react-bootstrap";
import pizzaInicio from "../../../assets/pizza.png";

const Main = ({ login, openLogin, logged, setLogged }) => {

  return (
        <>
            <main>
                {
                login ? 
                (<>
                    <img className="background-pizza z-2" src={pizzaInicio} loading='lazy'></img>
                    <section name="login" className='form-background'>
                        <svg className="background-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1277.08 767.46">
                            <path d="m317.33,3.41c-34.36,7.41-92.12,24.57-149.75,68.07-84.24,63.58-117.27,144.98-134.43,188.89C20.19,293.52-4.83,359.61.82,447.55c4.48,69.83,26.17,120.31,39.14,149.75,34.65,78.69,83.56,134.31,122.52,170.17h1114.6V0c-319.92,1.14-639.83,2.27-959.75,3.41Z" fill="currentColor" />
                        </svg>
                        <div className='inicioSesion'>
                            <h2 className='texto-blanco marca-underline pb-0'>Inicia sesión</h2>
                            <form action="" className='formulario'>
                                <label htmlFor="user" className="form-label text-white">Usuario</label>
                                <input type="text" name="user" id="user" className="form-control" />

                                <label htmlFor="passsword" className="form-label text-white">Contraseña</label>
                                <input type="password" name="passsword" id="passsword" className="form-control" />

                                <Link className='texto-blanco background-primary-yellow main-boton' onClick={() => { setLogged(true); }} to={"/menu"}>Iniciar</Link>
                            </form>
                        </div>
                    </section>
                </>)
                :(<>
                    <img className="background-pizza" src={pizzaInicio} loading='lazy'></img>
                    <div className='position-absolute welcome'>
                        <h1 className="text-start text-white">Decora tu pizza a tu gusto</h1>
                        <p className="text-start texto-blanco parrafo-inicio z-3">En CustomSlice crea la pizza de tus sueños, ¡justo como te gusta! Sumérgete en un mundo de infinitas posibilidades y sabores, donde cada bocado es una experiencia personalizada. </p>
                        {
                        logged ?
                            (<Link className='texto-blanco background-primary-yellow main-boton' to={"/menu"}>Comencemos</Link>)
                            : (<Link className='texto-blanco background-primary-yellow main-boton' onClick={() => { openLogin(); }} to={"/login"}>Comencemos</Link>)
                        }

                    </div>
                </>) 
                }

            </main>
        </>
    );
}

export default Main