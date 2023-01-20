import React from 'react'
import { TodoForm } from '../components/TodoForm'
import { useToDos } from '../hooks/useTodos'

export function NewTodoPage() {
    const { addToDo, loading } = useToDos()
    if (loading) return <p>loading</p>

    return (
        <TodoForm
            submitEvent={addToDo}
            title="Add new To-Do!"
            submitText="Add"
        />
    )
}
