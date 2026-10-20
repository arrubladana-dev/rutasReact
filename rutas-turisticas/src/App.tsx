import TarjetaRuta from "./components/TarjetaRuta";
import { rutas } from "./datos/rutas";

function App() {
    return (
        <main>
            <h1>Rutas turísticas del Quindío</h1>
            <TarjetaRuta ruta={rutas[0]} />
        </main>
    );
    
}

export default App;
