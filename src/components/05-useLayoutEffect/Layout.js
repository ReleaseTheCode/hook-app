import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css'

export const Layout = () => {
    const [boxSize, setboxSize] = useState({})
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log( pTag.current.getBoundingClientRect() );
        setboxSize( pTag.current.getBoundingClientRect() );
    }, [quote]);

    return (
        <div>
            <h3>Layout Effect</h3>
            <hr/>
            
            <blockquote className='blockquote text-right'>
                <p
                    className='mb-2'
                    ref={ pTag }
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button 
                className='btn btn-secondary'
                onClick={increment}
            >Next quote</button>
        </div>
    )
}
