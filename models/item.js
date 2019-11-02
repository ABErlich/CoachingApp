
export class Item {

    constructor (obj) {
        this.Tipo = "";
        this.Pregunta = "";
        this.Respuesta = null;
        this.Consejo = "";
        this.Valor = 0;

        Object.assign(this, obj);
    }

}