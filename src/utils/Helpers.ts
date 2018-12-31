const gt = (x: number) => Math.round(x - 10 < 0 ? 0 : x - 10)
const lt = (x: number) =>  Math.round(x + 10)

export function similarBierQueryString(abv: number, ibu: number, ebc: number) {
    const params = {
        abv_gt: gt(abv),
        abv_lt: lt(abv),
        ebc_gt: gt(ebc),
        ebc_lt: lt(ebc),
        ibu_gt: gt(ibu),
        ibu_lt: lt(ibu)
    }

    return Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
}