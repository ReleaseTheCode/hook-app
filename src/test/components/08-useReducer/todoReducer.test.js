import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Test on ToDo Reducer', () => {

    test('should return default values', () => {
        const state = todoReducer( demoTodos, {} );
        expect( demoTodos ).toEqual(state);
    });

    test('should return the add result', () => {
        const newTodo = {
            id: 3,
            todo: 'Comprar Cafe',
            done : true
        }
        
        const state = todoReducer( demoTodos, { type: 'add', payload: newTodo } );
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, newTodo ] );
    });
    
});
