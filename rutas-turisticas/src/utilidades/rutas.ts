import type { Dificultad, Ruta } from "../datos/rutas";

export type CriterioOrden = "precio" | "duracion";

export function filtrarPorDificultad(
    lista: Ruta[],
    dificultad: Dificultad | "todas",
): Ruta[] {
    if (dificultad === "todas") return lista;
    return lista.filter((ruta) => ruta.dificultad === dificultad);
}

export function ordenarRutas(lista: Ruta[], criterio: CriterioOrden): Ruta[] {
    return lista.toSorted((a, b) =>
        criterio === "precio" ? a.precio - b.precio : a.duracionHoras - b.duracionHoras,
    );
}
