import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../components/TodoForm'
import { useToDos } from '../hooks/useTodos'

export function EditTodoPage() {
    const { editToDo } = useToDos()
    const {
        state: { toDoText },
    } = useLocation()

    let { id } = useParams()
    id = Number(id) //useParams converts number to text. Just in case, it is converted to number again

    return (
        <TodoForm
            submitEvent={newText => editToDo({ id, newText })}
            title="Edit To-Do"
            submitText="Edit"
            defaultText={toDoText}
        />
    )
}
