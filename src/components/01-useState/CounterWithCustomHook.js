import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, reset, decrement } = useCounter( 100 );

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr/>
            <button 
                className='btn btn-success'
                onClick={ decrement }
            >
                -1
            </button>
            <button 
                className='btn btn-warning'
                onClick={ reset }
            >
                Reset
            </button>
            <button 
                className='btn btn-danger'
                onClick={ increment }
            >
                +1
            </button>
        </>
    )
}
