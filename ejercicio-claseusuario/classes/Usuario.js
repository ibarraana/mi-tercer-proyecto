export default class Usuarios {
    nombre
    email
    edad
    #pin

    constructor(nombre, email, edad, pin) {
        this.nombre = nombre
        this.email = email
        this.edad = edad
        this.#pin = pin
    }
}