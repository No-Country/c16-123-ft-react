import './index.css'
import  "react-bootstrap"

const Main = ({login, openLogin}) => {
    console.log(login);
    if(login){
        return(
            <section name="login" className='form-background'>
                <img className="background-pizza z-2" src='/src/assets/pizza.png'></img>
                <svg className="background-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1277.08 767.46">
                    <path d="m317.33,3.41c-34.36,7.41-92.12,24.57-149.75,68.07-84.24,63.58-117.27,144.98-134.43,188.89C20.19,293.52-4.83,359.61.82,447.55c4.48,69.83,26.17,120.31,39.14,149.75,34.65,78.69,83.56,134.31,122.52,170.17h1114.6V0c-319.92,1.14-639.83,2.27-959.75,3.41Z" fill="currentColor"/>
                </svg>
                <div className='inicioSesion'>
                    <h2 className='texto-blanco marca-underline pb-0'>Inicia sesión</h2>
                    <form action="" className='formulario'>
                        <label htmlFor="user" className="form-label text-white">Usuario</label>
                        <input type="text" name="user" id="user" className="form-control"/>

                        <label htmlFor="passsword" className="form-label text-white">Contraseña</label>
                        <input type="password" name="passsword" id="passsword"className="form-control"/>
                        
                        <button className='background-dark-yellow'>Iniciar</button>
                    </form>
                </div>
            </section>
        )
    } else {
        return (
            <main>
                <img className="background-pizza z-1" src='/src/assets/pizza.png'></img>
                <div className='position-absolute welcome'>
                    <h1 className="text-start text-white">Decora tu pizza a tu gusto</h1>
                    <p className="text-start texto-blanco parrafo-inicio z-3">En CustomSlice crea la pizza de tus sueños, justo como te gusta! Sumérgete en un mundo de infinitas posibilidades y sabores, donde cada bocado es una experiencia personalizada. </p>
                    <button className='background-dark-yellow' onClick={openLogin}>Comenzemos</button>
                </div>
                
            </main>
        )
    }
}

export default Main