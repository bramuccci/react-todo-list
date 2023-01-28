import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { EditTodoPage } from './pages/EditTodoPage'
import { HomePage } from './pages/HomePage'
import { NewTodoPage } from './pages/NewTodoPage'
import { NotFound } from './pages/NotFound'

export function App() {
    return (
        <HashRouter>
            <Switch>
                {/* <Route path="*" element={<NotFound />} /> */}
                <Route path="/new">
                    <NewTodoPage />
                </Route>
                <Route path="/edit/:id">
                    <EditTodoPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </HashRouter>
    )
}
