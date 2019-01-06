
export const request = async (url: string, headers: {}) => {
    const response = await fetch(`${url}`, { headers });
    if (!response.ok) {
        throw Error(response.status.toString());
    }
    return response.json();
}