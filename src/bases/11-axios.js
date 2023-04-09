import axios from 'axios'
    
const apiKey = 'd8Xvb2J59sC99bJCDwtsrpPaHNtbmfl6'
// `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

// creamos una instancia de axios
const giphyApi = axios.create( {
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

// ejemplo de cómo extraemos información de la instancia con un get
/* 
giphyApi.get('/random')
    .then( resp => {
        //console.log(resp)
        //const url = resp.data.data.images.original.url

        // podemos obtener también la url desestructurando la respuesta de axios
        const { data } = resp.data
        const { url } = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)

    })
*/