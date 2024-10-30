import * as React from 'react';
import renderer from 'react-test-renderer';

import { ThemedView } from '../ThemedView';

it(`renders correctly`, () => {
  const tree = renderer.create(<ThemedView />).toJSON();

  expect(tree).toMatchSnapshot();
});
