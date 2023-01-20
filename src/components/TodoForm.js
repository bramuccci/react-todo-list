import React from 'react'
import { useNavigate } from 'react-router-dom'

export function TodoForm({ submitEvent, title, submitText, defaultText = '' }) {
    const [newToDoValue, setNewToDoValue] = React.useState(defaultText)
    const navigate = useNavigate()

    const onCancel = () => navigate('/')
    const onChange = e => setNewToDoValue(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        submitEvent(newToDoValue)
        navigate('/')
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <label>{title}</label>
            <input
                value={newToDoValue}
                onChange={onChange}
                placeholder="write here"
            />
            <div className="form__btn-container">
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn--cancel"
                >
                    Cancel
                </button>
                <button className="btn--add" type="submit">
                    {submitText}
                </button>
            </div>
        </form>
    )
}
