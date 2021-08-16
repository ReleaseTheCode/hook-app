import React from 'react'
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem'

export const TodoList = ( { todos, handleToggle, handleDelete } ) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map( ( todo, index ) => (
                    <TodoItem
                        key={ todo.id }
                        index={ index+1 }
                        todo={todo}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ) )
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleToggle: PropTypes.func,
    handleDelete: PropTypes.func
}