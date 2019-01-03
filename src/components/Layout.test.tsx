import * as React from 'react';
import Layout from './Layout';

it('layout renders correctly', () => {
  const tree = renderer
      .create(<Layout>Hello!</Layout>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
