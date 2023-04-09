
let firstName ;
let lastName = 'Ortega';

// en el template podemos utilizar || para mostrar algo en caso de que la variable no tenga valor
console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName'}`)

const isActive = true

// el operador ternario (? , :) sirve como atajo para hacer un if
// primero colocamos la condición, luego el if (que sería ?), y por último el else (que sería :)
// para operaciones lógicas complejas es mejor conservar la estructura de if
let message = ( isActive ) ? 'Activo' : 'Inactivo'

/*
if ( !isActive ) {
    message = 'Activo'
} else 
    message = 'Inactivo'
*/

console.log(message)

// un null check es comprobar si el valor no es null antes de continuar con las operaciones