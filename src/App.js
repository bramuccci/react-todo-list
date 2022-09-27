import React from 'react'
import { AppUI } from './AppUI'
import { TodoProvider } from './components/TodoContext'

const defaultToDos = [
    { text: "You can create To-Do's with the + button", completed: false },
    { text: 'You can search with the box below', completed: false },
    { text: 'You can complete a To-Do', completed: true },
    { text: 'You can delete a To-Do', completed: true },
]

function App(props) {
    return (
        <TodoProvider defaultToDos={defaultToDos}>
            <AppUI />
        </TodoProvider>
    )
}

export default App
