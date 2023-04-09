// importación estándard
// import {owners} from './data/heroes'
// importación por defecto. Podemos renombrar lo que sea que estemos recogiendo
import superHeroes from './../data/heroes'

// getHeroById(id)
// funciones de Flecha
// find

/*
const getHeroById = (id) => {   
    return superHeroes.find(hero => hero.id === id)
}
*/

// esto es lo mismo que lo anterior
export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)

//console.log(getHeroById(2)) // Spiderman

// getHeroesByOwner('DC', 'Marvel')
// filter
// []  solo los heroes de DC o Marvel
//console.log(getHeroesByOwner('DC')) // Batman, Superman y Flash

// en este caso filtramos por autor
export const getHeroesByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)

//console.log(getHeroesByOwner('DC'))



/*
import { getHeroById, getHeroesByOwner } from "./bases/08-imp-exp"

console.log(getHeroById(2)) // Spiderman
console.log(getHeroesByOwner('Marvel')) // []
*/