import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { EditTodoPage } from './pages/EditTodoPage'
import { HomePage } from './pages/HomePage'
import { NewTodoPage } from './pages/NewTodoPage'
import { NotFound } from './pages/NotFound'

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<NewTodoPage />} />
                <Route path="/edit/:id" element={<EditTodoPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}
