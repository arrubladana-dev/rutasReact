import { rutas } from "./datos/rutas";
import type { Dificultad } from "./datos/rutas";
import ListaRutas from "./components/ListaRutas";
import { filtrarPorDificultad, ordenarRutas } from "./utilidades/rutas";
import type { CriterioOrden } from "./utilidades/rutas";

const DIFICULTAD_FILTRO: Dificultad | "todas" = "todas"; // "baja" | "media" | "alta" | "todas"
const CRITERIO_ORDEN: CriterioOrden = "precio"; // "precio" | "duracion"

function App() {
    const visibles = ordenarRutas(
        filtrarPorDificultad(rutas, DIFICULTAD_FILTRO),
        CRITERIO_ORDEN,
    );

    const mensajeVacio =
    DIFICULTAD_FILTRO === "todas"
        ? "No hay rutas disponibles."
        : `No hay rutas de dificultad ${DIFICULTAD_FILTRO}.`;
    return (
        <main>
            <h1>Rutas turísticas del Quindío</h1>
            <p className="resumen">Se encontraron {visibles.length} rutas</p>
            <ListaRutas
                rutas={visibles}
                titulo="Rutas disponibles"
                mensajeVacio={mensajeVacio}
            />
        </main>
    );
}

export default App;
