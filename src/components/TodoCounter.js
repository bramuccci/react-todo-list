import React from 'react'
import { TodoContext } from './TodoContext'

export function TodoCounter() {
    const { completedToDosLength, totalToDosLength } =
        React.useContext(TodoContext)

    return (
        <h2 className="TodoCounter">
            You completed {completedToDosLength} of {totalToDosLength} To-Do's
        </h2>
    )
}
