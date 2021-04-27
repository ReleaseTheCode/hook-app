import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import { Small } from './Small';
export const Memorize = () => {
    const [show, setshow] = useState(true);
    const { counter, increment } = useCounter(10);


    return (
        <div>
            <h1>Memorize</h1>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr/>
            <button
                className='btn btn-secondary'
                onClick={ increment }
            >
                +1
            </button>
            <button
                className='btn btn-danger'
                onClick={ ()=> setshow(!show) }
            >
                show/hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
