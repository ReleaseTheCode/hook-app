import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    return (
        <div className='m-3'>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                ref={ inputRef }
                className='form-control mb-2'
                placeholder='Su nombre'
            />
            <button
                className='btn btn-secondary'
                onClick={ handleClick }>
                Focus
            </button>
        </div>
    )
}
