export const API_URL = "https://api.punkapi.com/v2/";
const headers = {
    'Accept': 'application/json'
};

export const getBiers = () =>
    fetch(`${API_URL}/beers?page=2&per_page=20`, {headers})
        .then(response => {
            if (!response.ok) { throw Error(response.status.toString()); }
            return response;
        })
        .then(response => response.json())


export const getBier = (postId: string) =>
    fetch(`${API_URL}/posts/${postId}`)
        .then(response => {
            if (!response.ok) { throw Error(response.status.toString()); }
            return response;
        })
        .then(response => response.json())

