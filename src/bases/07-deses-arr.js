

const characters = ['Goku', 'Vegeta', 'Trunks']

/*
const goku = characters[0]
const vegeta = characters[1]
const trunks = characters[2]
console.log(goku,vegeta,trunks)
*/

// la desestructuración de arrays es similar a la de objetos. No tenemos porqué
// declarar todas las constantes, solo las que necesitamos
const[, , tr] = characters
console.log(tr)

const [ , vegeta] = characters
console.log(vegeta)

const [g, v, t, goten = 'No tiene valor'] = characters
console.log(goten)

/*
const returnArray = () => {
    return ['ABC', 123]
}
*/

/*
const pair = returnArray()
console.log(pair[0], pair[1])
*/

// la función returnArray recibe dos parámetros y los devuelve
const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

// declaramos las dos constantes con las dos posiciones del array
const [letters, numbers] = returnArray(['XYZ', 987])

console.log(letters, numbers)

