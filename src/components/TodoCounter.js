import React from 'react'

export function TodoCounter({ completedToDosLength, totalToDosLength }) {
    return (
        <h2 className="TodoCounter">
            You completed {completedToDosLength} of {totalToDosLength} To-Do's
        </h2>
    )
}
