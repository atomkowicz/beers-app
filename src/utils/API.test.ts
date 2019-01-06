import { fetchProduct } from './API';
import * as beer_1 from './__mocks__/beer_1.json';

jest.mock('./request');

test('fetchProduct()', async () => {
    const product = await fetchProduct('1');
    expect.assertions(1);
    expect(product).toEqual(beer_1);
});


