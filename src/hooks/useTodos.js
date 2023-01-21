import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const defaultToDos = [
    {
        text: "You can create To-Do's with the + button",
        completed: false,
        id: 0,
    },
    { text: 'You can search with the box below', completed: false, id: 1 },
    { text: 'You can complete a To-Do', completed: true, id: 2 },
    { text: 'You can delete a To-Do', completed: true, id: 3 },
]

export function useToDos() {
    const {
        item: toDos,
        saveItem: saveToDos,
        synchronizeItem: synchronizeToDos,
        loading,
        error,
    } = useLocalStorage('TODOS_V2', defaultToDos)

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

    const toggleCompleteToDo = id => {
        const newToDos = [...toDos]
        const toDo = newToDos[toDos.findIndex(toDo => toDo.id === id)]
        toDo.completed = !toDo.completed
        saveToDos(newToDos)
    }

    const deleteToDo = id => {
        const newToDos = toDos.filter(toDo => toDo.id !== id)
        saveToDos(newToDos)
    }

    const editToDo = ({ id, newText }) => {
        const newToDos = [...toDos]
        const toDo = newToDos[toDos.findIndex(toDo => toDo.id === id)]
        toDo.text = newText
        saveToDos(newToDos)
    }

    const addToDo = text => {
        const id = newTodoId.next().value
        try {
            const newToDos = [...toDos]
            newToDos.unshift({
                completed: false,
                text,
                id: id,
            })
            saveToDos(newToDos)
        } catch (error) {
            console.log(error)
        }
    }

    const getToDo = id => toDos.find(toDo => toDo.id === id)

    function* generateId() {
        let id = toDos.length
        while (true) {
            yield id++
        }
    }

    const newTodoId = generateId()

    return {
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
        synchronizeToDos,
        editToDo,
        getToDo,
    }
}
