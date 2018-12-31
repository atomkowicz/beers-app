import * as renderer from "react-test-renderer";
import * as React from "react";
import Loader from "./Loader";

test('loader renders correctly', () => {
    const tree = renderer
        .create(<Loader/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});