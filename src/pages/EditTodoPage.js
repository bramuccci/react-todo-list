import React from 'react'
import { useParams } from 'react-router-dom'
import { TodoForm } from '../components/TodoForm'
import { useToDos } from '../hooks/useTodos'

export function EditTodoPage() {
    const { editToDo, getToDo, loading } = useToDos()
    const params = useParams()
    const id = Number(params.id) //useParams converts number to text. Just in case, it is converted to number again

    if (loading) return <p>loading</p>

    const toDo = getToDo(id)

    return (
        <TodoForm
            submitEvent={newText => editToDo({ id, newText })}
            title="Edit To-Do"
            submitText="Edit"
            defaultText={toDo.text}
        />
    )
}
