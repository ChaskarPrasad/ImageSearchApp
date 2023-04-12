import axios from "axios";

async function searchImages(term){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID H3Ko9YZO9-fp0ufATO3-9Ak0LY9HhfRHkEkY3RXA7oQ'
        },
        params:{
            query:term
        }
    })
    return response.data.results;
}

export default searchImages;