import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch')

describe('Testing on MultipleCustomHooks', () => {
    test('should render correctly', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow( <MultipleCustomHooks/> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should render info', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'rich',
                quote: 'qwerty'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks/> );

        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-2').text().trim() ).toBe('qwerty');

        console.log( wrapper.html() );
    });
    
});
