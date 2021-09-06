import React from 'react';
import { shallow } from 'enzyme';
import { TodoItem } from "../../../components/08-useReducer/TodoItem"
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test on <TodoItem/>', () => {
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    const wrapper = shallow(
        <TodoItem
            index={ 0 }
            todo={demoTodos[0]}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        /> 
    );

    test('should render', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should call func handleDelete()', () => {
        wrapper.find('.btn-danger').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    })
    
    test('should call func handleToggle()', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    });

    test('should render the text on <p>', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( `0 ${ demoTodos[0].desc }` );
    });

    test('should render the <p> with the class "complete" ', () => {
        const doneTodo = demoTodos[0];
        doneTodo.done = true;
        const wrapper = shallow(
            <TodoItem
                index={ 0 }
                todo={doneTodo}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
            /> 
        );

        const p = wrapper.find('p');
        expect( p.hasClass('complete') ).toBe( true );
    })
    
})
