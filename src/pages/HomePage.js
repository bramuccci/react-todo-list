import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useToDos } from '../hooks/useTodos'
import { TodoCounter } from '../components/TodoCounter'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoSearch } from '../components/TodoSearch'
import { TodoHeader } from '../components/TodoHeader'
import { TodoError } from '../components/TodoError'
import { TodoLoading } from '../components/TodoLoading'
import { EmptyTodos } from '../components/EmptyTodos'
import { EmptySearchResult } from '../components/EmptySearchResult'
import { ChangeAlert } from '../components/ChangeAlert'

export function HomePage() {
    const navigate = useNavigate()
    const {
        searchedToDos,
        toggleCompleteToDo,
        deleteToDo,
        loading,
        error,
        completedToDosLength,
        totalToDosLength,
        searchValue,
        setSearchValue,
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
                        editToDo={() =>
                            navigate(`/edit/${toDo.id}`, {
                                state: { toDoText: toDo.text },
                            })
                        }
                    />
                )}
            </TodoList>

            <CreateTodoButton onClick={() => navigate('/new')} />
        </>
    )
}
