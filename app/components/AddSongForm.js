import React from "react";
import RaisedButton from "material-ui/lib/raised-button";
import TextField from "material-ui/lib/text-field";
import songActions from "../actions/SongActions"

// SongForm allows users to submit a song URL via clicking submit or pressing enter
// SongForm will take the url and dispatch an addSong action. 
class AddSongForm extends React.Component{

	constructor(props) {
		super(props);
		// State
		this.state = {
			urlInput : ""
		}
	}

	// dispatches an addSong action to update store
	handleSubmit(e) {
		event.preventDefault();
		this.props.dispatch(songActions.addSong(this.state.urlInput))
		this.setState({urlInput : ""}) // clears TextField value
	}

    // updates this.state.urlInput when text in TextField is changed
    handleTextFieldChange(e) {
    	this.setState({ urlInput: e.target.value });
    }

	render() {
		return(
			<div>
				<TextField 
					hintText="Song URL"
					onChange = {this.handleTextFieldChange.bind(this)}
					onEnterKeyDown = {this.handleSubmit.bind(this)}
					value = {this.state.urlInput}
				/>

				<br/>

				<RaisedButton
					onClick = {this.handleSubmit.bind(this)}
					label="Add to Queue"
					secondary={true}
				/>
			</div>
		)
	}
}

export default AddSongForm