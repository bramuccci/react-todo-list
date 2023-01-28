import React from 'react'
// import { useSearchParams } from 'react-router-dom'

export function TodoSearch({ setSearchValue, loading }) {
    // const [searchParams, setSearchParams] = useSearchParams()
    // const paramsValue = searchParams.get('search')

    // const onSearchValueChange = ({ target: { value } }) => {
    //     setSearchValue(value)
    //     setSearchParams({ search: value })
    // }

    return (
        <input
            className={`TodoSearch ${loading && 'TodoSearch--loading'}`}
            // onChange={onSearchValueChange}
            // value={paramsValue ?? ''}
            placeholder="Search a To-Do"
        />
    )
}
