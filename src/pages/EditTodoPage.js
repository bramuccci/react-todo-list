import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { TodoForm } from '../components/TodoForm'
import { useToDos } from '../hooks/useTodos'
import { NotFound } from './NotFound'

export function EditTodoPage() {
    const { editToDo, loading, getToDo } = useToDos()
    const { state } = useLocation()
    let { id } = useParams()
    id = Number(id) //useParams converts number to text. Just in case, it is converted to number again

    let toDoText

    if (!state) {
        if (loading) return <p>loading</p>
        let toDo = getToDo(id)
        if (!toDo) return <NotFound />
        toDoText = toDo.text
    } else ({ toDoText } = state)

    return (
        <TodoForm
            submitEvent={newText => editToDo({ id, newText })}
            title="Edit To-Do"
            submitText="Edit"
            defaultText={toDoText}
        />
    )
}
