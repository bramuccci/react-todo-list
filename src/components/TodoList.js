import React from 'react'

export function TodoList({
    error,
    loading,
    searchedToDos,
    totalToDosLength,
    onError,
    onLoading,
    onEmptyToDos,
    onEmptySearchResult,
    children,
}) {
    return (
        <section className="TodoList">
            {error && onError()}
            {loading && onLoading()}

            {!loading && !totalToDosLength && onEmptyToDos()}

            {searchedToDos.map(children)}

            {!searchedToDos.length &&
                !!totalToDosLength &&
                onEmptySearchResult()}
        </section>
    )
}
