
const miPromesa = () => {
    return new Promise(( resolve, reject ) => {
        setTimeout( () => {
            resolve('Tenemos un valor en la promesa')
            reject('REJECT en mi promesa')
        }, 3000)
    })
}

// El async() permite que la función devuelva una promesa

// si ejecutamos el cuerpo de la función fuera de la función, se comportará
// de forma síncrona. Es decir, las órdenes se ejecutan de forma secuencial
// Podemos proporcionar la asincronía utilizando async y await


// de esta forma se ejecuta el primer console.log, después la promesa, y por último el
// segundo console.log. Además la función devuelve algo, que podremos recoger con el .then
// Si no se ejecuta el try, lo hace el catch.
const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')

        const respuesta = await miPromesa()
        console.log(respuesta)

        console.log('Fin')

        return 'Fin de medirTiempoAsync'

    } catch (error) {
        throw 'Error en medirTiemnpoAsync'
    }
    
}

medirTiempoAsync()
    .then( valor => console.log(valor) ) 
    .catch( err => console.log('error:', err) )

