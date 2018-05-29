import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './components/App'
import './style.css'

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)
