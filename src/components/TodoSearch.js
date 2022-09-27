import React from 'react'
import { TodoContext } from './TodoContext'

export function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    const onSearchValueChange = e => setSearchValue(e.target.value)

    return (
        <input
            onChange={onSearchValueChange}
            value={searchValue}
            className="TodoSearch"
            placeholder="Search a To-Do"
        />
    )
}
