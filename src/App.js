import React from 'react'
import { useToDos } from './hooks/useTodos'
import { TodoCounter } from './components/TodoCounter'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoSearch } from './components/TodoSearch'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm'
import { TodoHeader } from './components/TodoHeader'
import { TodoError } from './components/TodoError'
import { TodoLoading } from './components/TodoLoading'
import { EmptyTodos } from './components/EmptyTodos'
import { EmptySearchResult } from './components/EmptySearchResult'

function App() {
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
    } = useToDos()

    return (
        <>
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

            <TodoList
                error={error}
                loading={loading}
                searchedToDos={searchedToDos}
                totalToDosLength={totalToDosLength}
                onError={() => <TodoError />}
                onLoading={() => <TodoLoading />}
                onEmptyToDos={() => <EmptyTodos />}
                onEmptySearchResult={() => (
                    <EmptySearchResult searchValue={searchValue} />
                )}
            >
                {toDo => (
                    <TodoItem
                        key={toDo.text}
                        text={toDo.text}
                        toDo={toDo}
                        completed={toDo.completed}
                        toggleCompleteToDo={() => toggleCompleteToDo(toDo.text)}
                        deleteToDo={() => deleteToDo(toDo.text)}
                    />
                )}
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

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    )
}

export default App
