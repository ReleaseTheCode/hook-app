import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from '../../../hooks/useCounter'

describe('Pruebas en useCounter', () => {
    test('Debe de retornar valores por defecto', () => {
        const { result } = renderHook( ()=> useCounter() );
        console.log(result.current)
        expect ( result.current.counter).toBe(10)
        expect ( typeof result.current.increment).toBe('function')
        expect ( typeof result.current.decrement).toBe('function')
        expect ( typeof result.current.reset).toBe('function')
    })

    test('should increment counter by 1', () => {
        const { result } = renderHook( ()=> useCounter(100) );
        const { increment, counter } = result.current;
        act( () => increment() );
        expect ( counter).toBe(100);
    });
    
    test('should decrement counter by 1', () => {
        const { result } = renderHook( ()=> useCounter(100) );
        const { decrement} = result.current;
        act( () => decrement() );
        const { counter } = result.current;
        expect ( counter).toBe(99);
    });
    test('should reset counter after decrement', () => {
        const { result } = renderHook( ()=> useCounter(100) );
        const { reset, decrement, counter } = result.current;
        act( () => {
            decrement();
            reset();
        });
        expect ( counter ).toBe(100);
    });
})
