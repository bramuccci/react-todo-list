import React from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoSearch } from './components/TodoSearch'
import { TodoContext } from './components/TodoContext'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm'
import { TodoHeader } from './components/TodoHeader'

export function AppUI() {
    const {
        searchedToDos,
        toggleCompleteToDo,
        deleteToDo,
        loading,
        error,
        openModal,
        setOpenModal,
        completedToDosLength,
        totalToDosLength,
        searchValue,
        setSearchValue,
        addToDo,
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    completedToDosLength={completedToDosLength}
                    totalToDosLength={totalToDosLength}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList>
                {error && (
                    <p>Oops! An error has ocurred, please try again later</p>
                )}
                {loading && <p>loading...</p>}
                {!loading && !searchedToDos.length && (
                    <p>Empty, add a To-Do!</p>
                )}

                {searchedToDos.map(toDo => (
                    <TodoItem
                        key={toDo.text}
                        text={toDo.text}
                        toDo={toDo}
                        completed={toDo.completed}
                        toggleCompleteToDo={() => toggleCompleteToDo(toDo.text)}
                        deleteToDo={() => deleteToDo(toDo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        addToDo={addToDo}
                    />
                </Modal>
            )}

            <CreateTodoButton />
        </React.Fragment>
    )
}
