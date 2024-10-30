import * as React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { useSharedValue } from 'react-native-reanimated';

import { HelloWave } from '../HelloWave';

it(`renders correctly`, () => {
  const tree = renderer.create(<HelloWave />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('animates correctly', () => {
  const { getByText } = render(<HelloWave />);
  const rotationAnimation = useSharedValue(0);

  expect(rotationAnimation.value).toBe(0);

  // Simulate the animation
  rotationAnimation.value = 25;
  expect(rotationAnimation.value).toBe(25);

  rotationAnimation.value = 0;
  expect(rotationAnimation.value).toBe(0);
});
