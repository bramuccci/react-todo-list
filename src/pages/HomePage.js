import React from 'react'
import { useToDos } from '../hooks/useTodos'
import { TodoCounter } from '../components/TodoCounter'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoSearch } from '../components/TodoSearch'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoForm'
import { TodoHeader } from '../components/TodoHeader'
import { TodoError } from '../components/TodoError'
import { TodoLoading } from '../components/TodoLoading'
import { EmptyTodos } from '../components/EmptyTodos'
import { EmptySearchResult } from '../components/EmptySearchResult'
import { ChangeAlert } from '../components/ChangeAlert'

export function HomePage() {
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
        synchronizeToDos,
    } = useToDos()

    return (
        <>
            <TodoHeader loading={loading}>
                <TodoCounter
                    completedToDosLength={completedToDosLength}
                    totalToDosLength={totalToDosLength}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <ChangeAlert synchronizeToDos={synchronizeToDos} />

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
                        key={toDo.id}
                        text={toDo.text}
                        toDo={toDo}
                        completed={toDo.completed}
                        toggleCompleteToDo={() => toggleCompleteToDo(toDo.id)}
                        deleteToDo={() => deleteToDo(toDo.id)}
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
