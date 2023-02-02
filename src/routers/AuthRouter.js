import React from 'react'
import {  Redirect, Route, Switch } from 'react-router-dom'
import { LoginPage } from '../components/auth/login/LoginPage'
import { RegistePage } from '../components/auth/register/RegistePage'

export const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={LoginPage} />
            <Route exact path="/auth/register" component={RegistePage} />
            <Redirect to="/auth/login" />
        </Switch>

    )
}
