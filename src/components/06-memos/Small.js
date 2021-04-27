import React from 'react'

export const Small = React.memo( ({ value }) => {
    console.log('memo')
    return (
        <small>{ value }</small>
    )
})
