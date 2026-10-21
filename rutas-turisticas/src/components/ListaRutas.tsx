import type { Ruta } from "../datos/rutas";
import TarjetaRuta from "./TarjetaRuta";

interface ListaRutasProps {
    rutas: Ruta[];
    titulo: string;
    mensajeVacio?: string;
}

function ListaRutas({
    rutas,
    titulo,
    mensajeVacio = "No hay rutas con esos criterios.",
}: ListaRutasProps) {
    if (rutas.length === 0) {
        return <p className="vacio">{mensajeVacio}</p>;
    }
    return (
        <section aria-label={titulo} className="lista">
            {rutas.map((ruta) => (
            <TarjetaRuta key={ruta.id} ruta={ruta} />
        ))}
        </section>
    );
}

export default ListaRutas;
