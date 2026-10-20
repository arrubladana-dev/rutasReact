import type { Dificultad, Ruta } from "../datos/rutas";

interface TarjetaRutaProps {
    ruta: Ruta;
}


const textoDificultad: Record<Dificultad, string> = {
    baja: "Dificultad baja",
    media: "Dificultad media",
    alta: "Dificultad alta",
};

function TarjetaRuta({ ruta }: TarjetaRutaProps) {
    return (
        <article className="tarjeta">
            <h3>{ruta.nombre}</h3>
            <p className="municipio">{ruta.municipio}</p>
            <p>Duración: {ruta.duracionHoras} h</p>
            <p>Precio: {ruta.precio}</p>
            <p>{textoDificultad[ruta.dificultad]}</p>
        </article>
    );
}

export default TarjetaRuta;

