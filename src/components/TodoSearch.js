import React from 'react'

export function TodoSearch({ searchValue, setSearchValue }) {
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
