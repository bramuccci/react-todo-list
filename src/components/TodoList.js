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
    render,
    children,
}) {
    return (
        <section className="TodoList">
            {error && onError()}
            {loading && onLoading()}

            {!loading && !totalToDosLength && onEmptyToDos()}

            {searchedToDos.map(render)}

            {!searchedToDos.length &&
                !!totalToDosLength &&
                onEmptySearchResult()}

            <ul>{children}</ul>
        </section>
    )
}
