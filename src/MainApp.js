import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

export const MainApp = () => {
    return (
    <div className="wrapper">
        <Provider store={store}>
        <AppRouter/>
        </Provider>
    </div>

    )
}
