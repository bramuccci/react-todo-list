import React from 'react'

export function CreateTodoButton({ openModal, setOpenModal }) {
    return (
        <button
            className="CreateTodoButton"
            onClick={() => setOpenModal(!openModal)}
        >
            +
        </button>
    )
}
