import React from 'react'

export function TodoList(props) {
    return (
        <section className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {!props.loading &&
                !props.searchedToDos.length &&
                props.onEmptyToDos()}

            {props.searchedToDos.map(props.render)}

            <ul>{props.children}</ul>
        </section>
    )
}
