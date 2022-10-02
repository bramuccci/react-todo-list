import React from 'react'
import { useStorageListener } from '../hooks/useStorageListener'

export function ChangeAlert({ synchronizeToDos }) {
    const { show, setShow } = useStorageListener(synchronizeToDos)
    if (show) {
        return (
            <div className="change-alert">
                <p>
                    <span>Warning!</span> Changes have been made.
                </p>
                <a href="refresh" onClick={() => setShow(false)}>
                    Click to refresh
                </a>
            </div>
        )
    }
}
