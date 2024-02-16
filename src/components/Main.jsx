import './css/Main.css'

const Main = () => {
    return (
        <main>
            <img className="background-pizza" src='/src/components/assets/inicio_pizza.png'></img>
            <h2 className="texto-blanco">Decora tu pizza a tu gusto</h2>
            <p className="texto-blanco parrafo-inicio">En CustomSlice crea la pizza de tus sueños, justo como te gusta! Sumérgete en un mundo de infinitas posibilidades y sabores, donde cada bocado es una experiencia personalizada. </p>
            <button className='background-light-yellow'>Comenzemos</button>
        </main>
    )
}

export default Main