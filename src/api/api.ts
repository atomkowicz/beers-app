// import {API_URL} from './api/const';

const headers = {
    'Accept': 'application/json'
};
export const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () =>
    fetch(`${API_URL}/posts`, {headers})
        .then(response => {
            if (!response.ok) { throw Error(response.status.toString()); }
            return response;
        })
        .then(response => response.json())


export const getPost = (postId: string) =>
    fetch(`${API_URL}/posts/${postId}`)
        .then(response => {
            if (!response.ok) { throw Error(response.status.toString()); }
            return response;
        })
        .then(response => response.json())

