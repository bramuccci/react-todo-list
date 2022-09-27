import React from 'react'
import iconCheck from '../assets/icon-check.png'
import iconClose from '../assets/icon-close.png'

export function TodoItem({
    toDo,
    completed,
    toggleCompleteToDo,
    text,
    deleteToDo,
}) {
    return (
        <li className={`TodoItem ${completed && 'TodoItem--completed'}`}>
            <img
                onClick={toggleCompleteToDo}
                src={iconCheck}
                className={`icon icon--check ${completed && 'icon--active'}`}
            ></img>
            <span
                className={`TodoItem__span ${
                    completed && 'TodoItem__span--completed'
                }`}
            >
                {text}
            </span>
            <img
                onClick={deleteToDo}
                src={iconClose}
                className={`icon icon--close ${completed && 'icon--active'}`}
            ></img>
        </li>
    )
}
