import * as React from "react";
import * as renderer from "react-test-renderer";
import Loader from "./Loader";

test('loader renders correctly', () => {
    const tree = renderer
        .create(<Loader/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});