import { applyMiddleware, compose, createStore } from 'redux'
import songReducer from '../reducers/songReducer'
import logger from 'redux-logger'

// middleware logging => see in console
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = {songs: [] }) {
	return finalCreateStore(songReducer, initialState);
}