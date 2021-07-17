import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css'
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const increment = useCallback( ( incremental ) => {
        setCounter(counterx => counterx + incremental);
    }, [setCounter] )

    return (
        <div>
            <h1>useCallback hook: {counter} </h1>
            <hr/>
            <ShowIncrement increment={ increment } />
        </div>
    )
}
