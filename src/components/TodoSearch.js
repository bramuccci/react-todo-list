import React from 'react'

export function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = e => setSearchValue(e.target.value)

    return (
        <input
            className={`TodoSearch ${loading && 'TodoSearch--loading'}`}
            onChange={onSearchValueChange}
            value={searchValue}
            placeholder="Search a To-Do"
        />
    )
}
