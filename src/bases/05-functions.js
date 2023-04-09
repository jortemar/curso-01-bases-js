const saludar = function (xyz) {
    return `Hola ${xyz}`
}

// Las funciones de flecha o funciones lambda, pueden ir en línea si solo contienen un return
const saludar2 = (xyz) => `Hola ${xyz}`

const nombre = 'Tony'

// en este caso, al devolver un objeto, es mejor ponerlo en bloque para evitar conflictos
const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
})

console.log(getUser())
console.log(saludar2(nombre))

const heroes = [{
    id: 1,
    name: 'Batman'
}, {
    id: 2,
    name: 'Superman'
}]

//el método 'some' recibe una función. Podemos hacerlo así. Devuelve un booleano
const existe = heroes.some( (hero) => hero.id === 1)

//el método 'find' retorna el objeto que cumple la condición
const heroe = heroes.find((heroe) => heroe.id === 1)

console.log(existe)
console.log(heroe)