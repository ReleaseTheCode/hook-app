import React from 'react'
import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from '../../fixtures/demoTodos'

describe('Test on <TodoList/>', () => {
const handleToggle = jest.fn();
const handleDelete = jest.fn();
    const wrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
     );
    test('should render', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have TodoItem = demoTodos.length ', () => {
        expect( wrapper.find('TodoItem').length ).toBe( demoTodos.length );
        expect( wrapper.find('TodoItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
        expect( wrapper.find('TodoItem').at(0).prop('handleToggle') ).toEqual( expect.any(Function) );
    });
    
    
})
