
//Utilizamos la API giphy para generar gifs aleatorios. Obtenemos la apiKey de la web de Gyphy

const apiKey = 'd8Xvb2J59sC99bJCDwtsrpPaHNtbmfl6'

//https://api.giphy.com/v1/gifs/random?api_key=d8Xvb2J59sC99bJCDwtsrpPaHNtbmfl6

//Utilizando Fetch API podemos tratar la petición como una promesa
//A su vez, el json que obtenemos lo tratamos también como una promesa
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json() )
    .then( ({ data }) => {

        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })

//cogemos directamente la data, que es la parte del objeto json que nos interesa.    
//Dentro del data tenemos images, y dentro de images tenemos original, entre otras.
//Podemos extraer el url (desestructuración de objetos), y generar un nodo img con DOM
//que finalmente insertamos en el body

    
    