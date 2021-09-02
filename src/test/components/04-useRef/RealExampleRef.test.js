import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef"

describe('Test on RealExampleRef', () => {
    const wrapper = shallow(<RealExampleRef/>);

    test('should render', () => {
        expect( wrapper ).toMatchSnapshot()
    });

    test('should change state clicking button', () => {
        wrapper.find('button.btn').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true)
    })
    
    
})
