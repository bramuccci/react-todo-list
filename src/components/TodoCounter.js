import React from 'react'

export function TodoCounter({
    completedToDosLength,
    totalToDosLength,
    loading,
}) {
    return (
        <h2 className="TodoCounter">
            {loading
                ? 'Loading...'
                : `You completed ${completedToDosLength} of ${totalToDosLength} To-Do's`}
        </h2>
    )
}
