import { useState, useEffect } from 'react'

export function useStorageListener(synchronizeToDos) {
    const [storageChange, setStorageChange] = useState(false)
    useEffect(() => {
        const onChange = change => {
            if (change.key === 'TODOS_V1') setStorageChange(true)
        }

        window.addEventListener('storage', onChange)
        return () => window.removeEventListener('storage', onChange)
    }, [])

    const setShow = () => {
        setStorageChange(false)
        synchronizeToDos()
    }

    return { setShow, show: storageChange }
}
