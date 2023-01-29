import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery'

export function TodoSearch({ setSearchValue, searchValue, loading }) {
    const [searchQuery] = useQuery('search')
    const history = useHistory()

    const onSearchValueChange = ({ target: { value } }) => {
        setSearchValue(value)
        history.push({ search: `search=${value}` })
    }

    useEffect(() => {
        if (searchQuery && searchQuery !== searchValue)
            setSearchValue(searchQuery)
    }, [searchQuery, setSearchValue, searchValue])

    return (
        <input
            className={`TodoSearch ${loading && 'TodoSearch--loading'}`}
            onChange={onSearchValueChange}
            value={searchQuery ?? ''}
            placeholder="Search a To-Do"
        />
    )
}
