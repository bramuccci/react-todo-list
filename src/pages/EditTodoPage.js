import React from 'react'
import { TodoForm } from '../components/TodoForm'
import { useToDos } from '../hooks/useTodos'

export function EditTodoPage() {
    return (
        <TodoForm
            submitEvent={() => console.log('edit todo')}
            title="Edit To-Do"
            submitText="Edit"
        />
    )
}
