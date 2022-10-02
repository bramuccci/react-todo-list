import React, { useState, useEffect } from 'react'

export function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener({ synchronizeToDos }) {
        const [storageChange, setStorageChange] = useState(false)
        useEffect(() => {
            const onChange = change => {
                if (change.key === 'TODOS_V1') setStorageChange(true)
            }

            window.addEventListener('storage', onChange)
            return () => window.removeEventListener('storage', onChange)
        }, [])

        const toggleShow = () => {
            setStorageChange(false)
            synchronizeToDos()
        }

        return <WrappedComponent toggleShow={toggleShow} show={storageChange} />
    }
}
