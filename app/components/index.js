// Entry point for application
// TODO : find a better location

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/store'
import Root from './Root'

// create an intial song with an empty url => Temporary
// Else Songs is empty and Player.js accesses this.props.songs[0].url
// It is impossible to get the url property of something undefined. 
// Unsure at the moment how to preset or render if songs is empty. 
let initalState = {
  songs: [{
    url: ''
  }]
}

let store = configureStore(initalState);

render(
	/* Root of application must be bound by Provider*/
	<Provider store={store}>
    	<Root />
	</Provider>,
	document.getElementById('app')
)