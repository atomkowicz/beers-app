import * as React from 'react';
import {MemoryRouter} from "react-router-dom";
import * as renderer from 'react-test-renderer';
import Header from "./Header";

it('header renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter><Header/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

