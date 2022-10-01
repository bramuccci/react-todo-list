import React from 'react'
import { withStorageListener } from '../hoc/withStorageListener'

export function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={() => toggleShow(false)}>Refresh</button>
            </div>
        )
    }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
