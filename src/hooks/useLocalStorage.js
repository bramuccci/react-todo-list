import React from 'react'

export function useLocalStorage(VERSION, defaultValue = '') {
    const [item, setItem] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

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
        }, 2500)
    }, [])

    const saveItem = newItem => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(VERSION, stringifiedItem)
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
    }
}
