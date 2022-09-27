import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = React.createContext()

export function TodoProvider(props) {
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', props.defaultToDos)

    const [searchValue, setSearchValue] = React.useState('')
    const searchedToDos = toDos.filter(toDo => {
        try {
            return toDo.text.toLowerCase().includes(searchValue.toLowerCase())
        } catch (error) {
            console.warn(error)
        }
    })

    const completedToDosLength = toDos.filter(toDo => toDo.completed).length
    const totalToDosLength = toDos.length

    const toggleCompleteToDo = toDoText => {
        if (!toDoText) return //if toDoText is undefined, return
        const toDoIndex = toDos.findIndex(toDo => toDo.text === toDoText)
        const newToDos = [...toDos]
        newToDos[toDoIndex].completed = !newToDos[toDoIndex].completed
        saveToDos(newToDos)
    }

    const deleteToDo = toDoText => {
        if (!toDoText) return //if toDoText is undefined, return

        const newToDos = toDos.filter(toDo => toDo.text !== toDoText)
        saveToDos(newToDos)
    }

    const addToDo = text => {
        try {
            const newToDos = [...toDos]
            newToDos.unshift({
                completed: false,
                text,
            })
            saveToDos(newToDos)
        } catch (error) {
            console.log(error)
        }
    }

    const [openModal, setOpenModal] = React.useState(false)

    return (
        <TodoContext.Provider
            value={{
                completedToDosLength,
                totalToDosLength,
                searchValue,
                setSearchValue,
                searchedToDos,
                toggleCompleteToDo,
                deleteToDo,
                addToDo,
                loading,
                error,
                openModal,
                setOpenModal,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}
