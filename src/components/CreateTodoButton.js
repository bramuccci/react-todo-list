import React from 'react'

export function CreateTodoButton({ onClick }) {
    return (
        <button className="CreateTodoButton" onClick={onClick}>
            +
        </button>
    )
}
