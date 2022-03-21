import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';


describe('Test on <LoginScreen/>', () => {
    const setUser = jest.fn();
    const userObj = {
        id: 1,
        name: 'richter'
    };

    const wrapper = mount(
        <UserContext.Provider value={ { setUser }}>
            <LoginScreen/> 
        </UserContext.Provider>
    );
    
    test('should render', () => {
        expect( wrapper).toMatchSnapshot();
    });

    test('should execute setUser with args', () => { 
        wrapper.find('button').prop('onClick')();
        expect( setUser ).toHaveBeenCalledWith( userObj );
    });
});
