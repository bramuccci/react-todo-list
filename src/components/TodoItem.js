import React from 'react'
import iconCheck from '../assets/icon-check.png'
import iconClose from '../assets/icon-close.png'
import iconEdit from '../assets/icon-edit.svg'

export function TodoItem({
    completed,
    toggleCompleteToDo,
    text,
    deleteToDo,
    editToDo,
}) {
    return (
        <li className={`TodoItem ${completed && 'TodoItem--completed'}`}>
            <img
                alt="click to complete To-Do"
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
                alt="click to delete To-Do"
                onClick={deleteToDo}
                src={iconClose}
                className={`icon icon--close ${completed && 'icon--active'}`}
            ></img>
            <img
                alt="click to edit To-Do"
                onClick={editToDo}
                src={iconEdit}
                className={'icon'}
            />
        </li>
    )
}
