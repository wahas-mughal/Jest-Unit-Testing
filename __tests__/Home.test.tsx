import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import HomeScreen from '../src/Home';
import { describe, expect, it } from '@jest/globals';

describe('Home Screen Snapshot', () => {
  it('Home Screen Snapshot', () => {
    const snap = render(<HomeScreen />).toJSON();
    expect(snap).toMatchSnapshot();
  })
  it('Home Counter Testing', () => {
    const {getByText, getByTestId} = render(<HomeScreen/>);

    //check the initial state of count
    expect(getByTestId('counter-text').props.children).toBe(0);

    //press button simulation
    fireEvent.press(getByText('Increment'));

    //after increment the value should be 1
    expect(getByTestId('counter-text').props.children).toBe(1)
  })
});
