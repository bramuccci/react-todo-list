import React from 'react'
import { TodoContext } from './TodoContext'

export function TodoForm() {
    const [newToDoValue, setNewToDoValue] = React.useState('')
    const { addToDo } = React.useContext(TodoContext)
    const { openModal, setOpenModal } = React.useContext(TodoContext)

    const onCancel = () => setOpenModal(false)

    const onSubmit = e => {
        e.preventDefault()
        addToDo(newToDoValue)
        setOpenModal(false)
    }
    const onChange = e => setNewToDoValue(e.target.value)

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label>Add a To-Do!</label>
            <input
                value={newToDoValue}
                onChange={e => onChange(e)}
                placeholder="write here"
            />
            <div className="form__btn-container">
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn--cancel"
                >
                    Cancel
                </button>
                <button className="btn--add" type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}
