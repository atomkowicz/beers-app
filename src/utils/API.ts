import {API_URL, BEERS_PER_PAGE, SIMILAR_BEERS_LIMIT} from "./Consts";
import * as Utils from "./Helpers";


const headers = {
    'Accept': 'application/json'
};

export interface IBeer {
    id: number;
    image_url: string;
    name: string;
    tagline: string;
    abv: number,
    ibu: number,
    ebc: number,
    description: string,
    brewers_tips: string
}

export const fetchProducts = async (currentPage: any) => {
    const response = await fetch(`${API_URL}/beers?per_page=${BEERS_PER_PAGE}&page=${currentPage}`, {headers});
    if (!response.ok) {
        throw Error(response.status.toString())
    }
    return await response.json() as IBeer[];
};

export const fetchSimilarProducts = async (product: IBeer) => {
    const query = Utils.similarBierQueryString(product.abv, product.ibu, product.ebc);
    const response = await fetch(`${API_URL}/beers?${query}&page=1&per_page=${SIMILAR_BEERS_LIMIT}`, {headers});
    if (!response.ok) {
        throw Error(response.status.toString());
    }
    const beers = await response.json() as IBeer[];
    return beers.filter(b => b.id !== product.id).slice(0, 3);
};


export const fetchProduct = async (postId: string) => {
    const response = await fetch(`${API_URL}/beers/${postId}`);
    if (!response.ok) {
        throw Error(response.status.toString());
    }
    return await response.json() as IBeer;
};



