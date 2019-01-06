import * as list from './list.json';

export const request = async (url: string, headers: {}) => {
    return new Promise((resolve, reject) => {

        if (/\/beers\/(\d+)$/.test(url)) {
            let match = url.match(/\/beers\/(\d+)$/);

            if (match !== null) {
                let beerId = parseInt(match[1]);

                list.filter(item => item.id == beerId)
                    ? resolve(list.filter(item => item.id == beerId)[0])
                    : reject({
                        error: 'Beer with ' + beerId + ' not found.',
                    })
            }
        } else {
            reject({
                error: 'Unknown request.',
            })
        }



    });
}
