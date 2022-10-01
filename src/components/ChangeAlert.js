import React from 'react'
import { withStorageListener } from '../hoc/withStorageListener'

export function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="change-alert">
                <p>
                    <span>Warning!</span> Changes have been made.
                </p>
                <a href="refresh" onClick={() => toggleShow(false)}>
                    Click to refresh
                </a>
            </div>
        )
    }
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
