
export const getGifs = async( type, category, limit ) => {

    const baseUrl = 'https://api.giphy.com/v1/gifs/';
    const typeUrl = type;
    const searchUrl = `q=${category}`
    const apiKey = `api_key=QEjISxncH9pcScDzu58WXxWrmG6Ep8NY`
    const limitUrl = `limit=${ limit }`

    const url = `${baseUrl + typeUrl + '?' + searchUrl + '&' + limitUrl + '&' + apiKey}`
    
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title, 
            url: img.images.original.webp
        }
    })

    return gifs

}