/*
console.log('Inicio')

new Promise( (resolve, reject)  => {

    console.log('cuerpo de la promesa')
    resolve('Promesa resuelta')
    reject('Promesa resuelta con error')

}).then( console.log ) //then( msg => console.log(msg) )
.catch( console.log ) //catch( err => console.log(err) )

console.log('Fin')
*/

import { getHeroById } from './bases/08-imp-exp'

// hacemos la función que nos devuelve la promesa
const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroById(id)

            if (hero) {
                resolve(hero)
            } else 
                reject('Héroe no existe')
            
        }, 1000)

    })
}

// llamamos la función, y en la llamada colocamos el .then y el .catch
getHeroByIdAsync(3)
    .then( h => console.log(`El héroe es ${h.name}`) )
    .catch( console.log )