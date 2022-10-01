import React, { useState } from 'react'

export function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener({ synchronizeToDos }) {
        const [storageChange, setStorageChange] = useState(false)

        window.addEventListener('storage', change => {
            if (change.key === 'TODOS_V1') {
                console.log('Changes ocurred')
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            setStorageChange(false)
            synchronizeToDos()
        }

        return <WrappedComponent toggleShow={toggleShow} show={storageChange} />
    }
}
