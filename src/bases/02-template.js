const nombre = 'Jose'
const apellido = 'Ortega'

const nombreCompleto = `${nombre} ${apellido}`

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

// el template nos permite, mediante backticks (`), poder alternar variables u
// operaciones lógicas junto con las cadenas
console.log(`Este es un texto: ${getSaludo(nombre)}`)