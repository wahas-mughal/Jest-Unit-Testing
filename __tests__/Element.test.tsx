import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import HomeScreen from '../src/Home';
import { expect, test } from '@jest/globals';

function findElements(tree: any, element: string){
    let res = undefined;
    for(let node in tree.children){
        if(tree.children[node].props.testID === element){
            res = true
        }
    }
    return res
}



test('Identify Input Element', () => {
    const tree = render(<HomeScreen/>).toJSON();
    expect(findElements(tree, 'counter-text')).toBeDefined()
})