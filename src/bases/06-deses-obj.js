const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

console.log(person.name)
console.log(person.age)
console.log(person.codeName)

//con la desestructuración generamos nuevas constantes que se van a extraer de la constante person
//en esa desestructuración podemos incluir constantes que tomen un valor por defecto si el objeto no cuenta con esa propiedad

/*
const {age, name, codeName, power = 'No tiene poder'} = person
console.log(name)
console.log(age)
console.log(codeName)
*/

//Power se muestra, pero no se añade al objeto

/*
console.log( power )
*/

/*
const createHero = (person) => {
    return {
        id: 16843543654,
        name: person.name,
        age: person.age,
        codeName: person.codeName,
        power: person.power
    }
}
*/

// si entramos a la desestructuración podemos hacerlo así. Sería la versión resumida del anterior
/*
const {name, age, codeName, power} = (person) => {
    return {
        id: 16843543654,
        name: name,
        age: age,
        codeName: codeName,
        power: power
    }
}
*/

//pero también podemos resumirlo más, deshaciéndonos del return. Para lograrlo DEBEMOS ENVOLVER EL CORCHETE ENTRE PARÉNTESIS

const createHero = ({name, age, codeName, power}) => ({
    id: 12346333354,
    name,
    age,
    codeName,
    power
})

console.log(createHero(person))
