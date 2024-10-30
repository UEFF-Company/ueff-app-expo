import * as React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';

import { Collapsible } from '../Collapsible';

it(`renders correctly`, () => {
  const tree = renderer.create(<Collapsible title="Test Title">Test Content</Collapsible>).toJSON();

  expect(tree).toMatchSnapshot();
});

it('toggles expand/collapse when pressed', () => {
  const { getByText, queryByText } = render(
    <Collapsible title="Test Title">Test Content</Collapsible>
  );

  // Initially, the content should not be visible
  expect(queryByText('Test Content')).toBeNull();

  // Press to expand
  fireEvent.press(getByText('Test Title'));
  expect(queryByText('Test Content')).not.toBeNull();

  // Press to collapse
  fireEvent.press(getByText('Test Title'));
  expect(queryByText('Test Content')).toBeNull();
});

it('handles onPress event correctly', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <Collapsible title="Test Title" onPress={onPressMock}>
      Test Content
    </Collapsible>
  );

  fireEvent.press(getByText('Test Title'));
  expect(onPressMock).toHaveBeenCalled();
});
