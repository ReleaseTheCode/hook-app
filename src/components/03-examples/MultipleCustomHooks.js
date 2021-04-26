import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import './customhooks.css'
export const MultipleCustomHooks = () => {
    const quote = 'https://www.breakingbadapi.com/api/quotes/1';

    const BreakingQuote = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(BreakingQuote)
    return (
        <div>
            <h3>custom hook</h3>
        </div>

    )
}
