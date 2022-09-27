import React from 'react'
import { TodoContext } from './TodoContext'

export function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext)

    return (
        <button
            className="CreateTodoButton"
            onClick={() => setOpenModal(!openModal)}
        >
            +
        </button>
    )
}
