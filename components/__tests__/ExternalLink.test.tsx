import * as React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

import { ExternalLink } from '../ExternalLink';

it(`renders correctly`, () => {
  const tree = renderer.create(<ExternalLink href="https://example.com">Example Link</ExternalLink>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('handles onPress event correctly', () => {
  const { getByText } = render(
    <ExternalLink href="https://example.com">Example Link</ExternalLink>
  );

  fireEvent.press(getByText('Example Link'));
  // Add your assertions here to verify the expected behavior
});
