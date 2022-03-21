import React from 'react';
import { mount, shallow } from 'enzyme';
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('Test on <Homescreen/>', () => {
    const user = {
        name: 'Mr X',
        email: 'Mrx@test.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={ { user }}>
            <HomeScreen/> 
        </UserContext.Provider>
    );

    test('should render', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
});
