import * as React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

import ParallaxScrollView from '../ParallaxScrollView';

it(`renders correctly`, () => {
  const tree = renderer.create(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<div>Header Image</div>}
    >
      <div>Content</div>
    </ParallaxScrollView>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('handles scrolling correctly', () => {
  const { getByTestId } = render(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<div>Header Image</div>}
    >
      <div>Content</div>
    </ParallaxScrollView>
  );

  const scrollView = getByTestId('scrollView');
  fireEvent.scroll(scrollView, { nativeEvent: { contentOffset: { y: 100 } } });

  // Add your assertions here to verify the expected behavior
});
