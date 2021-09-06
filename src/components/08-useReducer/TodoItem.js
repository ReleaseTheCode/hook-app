import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ index, todo, handleToggle, handleDelete}) => {
    return (
        <li 
            key={ todo.id }
            className='list-group-item'
        >
            <p 
                className={`${todo.done && 'complete' }`}
                onClick={ () => handleToggle( todo.id ) }
            > 
                { index} { todo.desc }
            </p>
            <button className='btn btn-danger' onClick={()=>handleDelete(todo.id)} >Borrar</button>
        </li>
    )
}

TodoItem.propTypes = {
    index: PropTypes.number,
    todo: PropTypes.object,
    handleToggle: PropTypes.func,
    handleDelete: PropTypes.func
}