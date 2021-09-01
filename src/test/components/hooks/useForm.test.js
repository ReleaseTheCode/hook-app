import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../../hooks/useForm'

describe('Test in useForm', () => {
    const initialForm = {
        name: 'rich',
        email: 'asd@asd.cl',
    }

    test('should return a default form', () => {
        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    })
    
    test('should change the value of name on form', () => {
        const event = {
            target: {
                name:'name',
                value:'richman'
            }
        }


        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;
        act( ()=> {
            handleInputChange( event );
        });
        const [ values ] = result.current;
        //expect(values).not.toEqual(initialForm);
        expect(values).toEqual( { ...initialForm, name:'richman' });

    })

    test('should reset the form', () => {
        const event = {
            target: {
                name:'name',
                value:'richman'
            }
        }


        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;
        act( ()=> {
            handleInputChange( event );
            reset();
        });
        const [ values ] = result.current;
        expect(values).toEqual(initialForm);
    })
    
    


})
