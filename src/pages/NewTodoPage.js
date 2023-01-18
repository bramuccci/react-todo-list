import React from 'react'
import { TodoForm } from '../components/TodoForm'
import { useToDos } from '../hooks/useTodos'

export function NewTodoPage() {
    const { addToDo } = useToDos()
    return (
        <TodoForm
            submitEvent={addToDo}
            title="Add new To-Do!"
            submitText="Add"
        />
    )
}
