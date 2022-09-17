const apiKey = 'q0ieiUzP86xclmkH6luGWogjFTENetSN'

export default function getGifs ({keyword = 'cat'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    
    return fetch(apiURL).then(r => r.json()).then(resp => {
        const { data } =  resp
        const gifs = data.map(image =>{
            const {images, title, id} = image
            const { url }= images.downsized_medium
            return { title, id, url }
        })
        return gifs
})}