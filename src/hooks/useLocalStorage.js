import React from 'react'

export function useLocalStorage(VERSION, defaultValue = '') {
    const [item, setItem] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [synchronizedItem, setSynchronizedItem] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            //setTimeout simulates the response time of an API
            try {
                const localStorageVersion = localStorage.getItem(VERSION)
                let parsedVersion

                if (localStorageVersion) {
                    parsedVersion = JSON.parse(localStorageVersion)
                } else {
                    const stringifiedDefaultToDos = JSON.stringify(defaultValue)
                    localStorage.setItem(VERSION, stringifiedDefaultToDos)
                    parsedVersion = [...defaultValue]
                }

                setItem(parsedVersion)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
            setSynchronizedItem(true)
        }, 2500)
    }, [synchronizedItem])

    const saveItem = newItem => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(VERSION, stringifiedItem)
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    const synchronizeItem = () => {
        setLoading(true)
        setSynchronizedItem(false)
    }

    return {
        item,
        saveItem,
        loading,
        error,
        synchronizeItem,
    }
}
