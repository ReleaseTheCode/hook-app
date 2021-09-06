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
    
    test('should return before the delete result', () => {
        const state = todoReducer( demoTodos, { type: 'delete', payload: 2 } );
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[0] ] );
    });

    test('should return an element with de property done changed', () => {
        const state = todoReducer( demoTodos, { type: 'toggle', payload: 1 } );
        expect( state[0].done ).toEqual( true );
    });
});
