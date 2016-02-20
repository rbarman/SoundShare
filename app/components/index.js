// Entry point for application
// TODO : find a better location

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/store'
import Root from './Root'

let store = configureStore();

render(
	/* Root of application must be bound by Provider*/
	<Provider store={store}>
    	<Root />
	</Provider>,
	document.getElementById('app')
)
