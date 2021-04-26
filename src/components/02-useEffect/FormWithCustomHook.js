import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'
export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('effectEmail')
    }, [ email ] )

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>useEffect</h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='tu email'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='*********'
                    autoComplete='off'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    )
}
