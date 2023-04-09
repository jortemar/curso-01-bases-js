const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 523123,
        lat: 14.3232,
        lng: 34.456842
    }
}

//con el operador spread (...) rompemos la referencia con la que sí contaría la siguiente expresión
//const persona2 = persona 
const persona2 = {...persona}
//esto permite hacer una copia exacta del objeto, que posteriormente podemos modificar
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)