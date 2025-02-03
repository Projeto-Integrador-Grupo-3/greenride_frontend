// import Motorista from "./Motorista";
// import Usuario from "./Usuario";

export default interface Corrida {
    id: any;
    embarque: string,
    destino: string,
    distanciaKm: number,
    velocidadeKh: number,
    valor?: number,
    tempo?: number,
    // motoristaid?: Motorista | null;
    // usuarioid?: Usuario | null;
}
