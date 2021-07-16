import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
export const MemoHook = () => {
    const [show, setshow] = useState(true);
    const { counter, increment } = useCounter(3000);

    const procesoPesado = ( iteraciones ) => {
        for( let i = 0; i < iteraciones; i++ ){
            console.log('here we go...')
        }
        return `${ iteraciones } iteraciones realizadas.`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Counter: <small >{counter}</small> </h1>
            <hr/>
            <p> { memoProcesoPesado }</p>
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
