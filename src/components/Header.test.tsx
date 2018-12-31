import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from "./Header";
import {MemoryRouter} from "react-router-dom";

it('header renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter><Header/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

