import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({ x:0, y:0 })

    useEffect( () => {
        const mouseMove = (evt) => {
            const coords = { x:evt.x, y:evt.y };
            setCoords(coords);
        }
        window.addEventListener('mousemove',mouseMove);
        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Awesome!</h3>
            <p> your mouse are in x:{coords.x} y:{coords.y} </p>
        </div>
    )
}
