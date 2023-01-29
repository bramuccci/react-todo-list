import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export function useQuery(value) {
    const { search } = useLocation()
    const setQuery = useMemo(() => new URLSearchParams(search), [search])
    const query = setQuery.get(value)
    return [query, setQuery]
}
