import React, { useEffect, useRef } from 'react'

import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './customhooks.css'

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote, author } = ( !loading && !!data.length > 0 ) && data[0];
    
    return (
        <div>
            <h3>BreakingBad Quotes</h3>
            <hr/>
            { loading &&
                <div className='alert alert-info text-right'>
                    Loading...
                </div>
            }
            { !loading &&
                <>
                    <blockquote className='blockquote text-right'>
                        <p className='mb-2'>{ quote } </p>
                        <footer className='blockquote-footer'>{ author }</footer>
                    </blockquote>
                    <button 
                        className='btn btn-secondary'
                        onClick={increment}
                    >Next quote</button>
                </>
            }
        </div>
    )
}
