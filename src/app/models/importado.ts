import { Timestamp } from "rxjs";

export class Importado{
    constructor(
        public id_importacion:number,
        public cantidad: number,
        public fecha: Date,
        public pais_id_pais: number,
        public producto_id_producto:number

    ){}
}
