// import * as renderer from 'react-test-renderer';
import * as API from "../utils/API";
import { IBeer } from "../utils/API";
import { BEERS_PER_PAGE } from "../utils/Consts";

describe('Async List', () => {
    const currentPage: number = 1;

    let data: IBeer[];

    beforeEach(async () => {
        data = await API.fetchProducts(currentPage);
    });

    it('should be able to fetch 🍺 list', async () => {
        return expect(data[0].name).toBe('Buzz');
    });

    it('should be exact 20 x 🍺 on page 1', async () => {
        return expect(data.length).toEqual(BEERS_PER_PAGE);
    });

});


