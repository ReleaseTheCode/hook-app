import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    useEffect( () => {
        console.log('hey')
    }, [] );

    const handleInputChange = (evt) => {
        //console.log(evt.target)
        const { name, value } = evt.target;
        setFormState( { ...formState, [name]: value })
    }

    const { name, email } = formState;

    return (
        <>
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
            </div>
            { ( name === '123' ) &&
                <Message />
            }
        </>
    )
}
