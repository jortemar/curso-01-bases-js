import giphyApi from './bases/11-axios'

const getImage = async() => {

    try {

        // hemos colocado el await entre paréntesis para poder insertarle al final el .data
        // de esta forma evitamos que en url haya dos data (data.data) 
        const { data } = (await giphyApi.get('/random')).data 
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)

    } catch (error) {
        console.log('Error en la petición', error)
        throw error
    }

}

getImage()