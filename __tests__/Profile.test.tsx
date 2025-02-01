import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ProfileScreen from '../src/Profile';
import { expect, describe , test } from '@jest/globals';


describe('Profile Test', () => {
  // test('Profile Screen Snapshot', () => {
  //   const snap = render(<ProfileScreen title = "Test"/>).toJSON();
  //   expect(snap).toMatchSnapshot();
  // });

  test('Profile Screen Props Test', () => {
    const {getByText} = render(<ProfileScreen title={"Test"}/>)
    // check the prop passed in rendered correctly
    expect(getByText('Test')).toBeTruthy();
  });
})

