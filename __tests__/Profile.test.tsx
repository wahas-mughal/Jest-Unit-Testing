import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ProfileScreen from '../src/Profile';
import { expect, test } from '@jest/globals';

test('Profile Screen Snapshot', () => {
  const snap = render(<ProfileScreen />).toJSON();
  expect(snap).toMatchSnapshot();
});
