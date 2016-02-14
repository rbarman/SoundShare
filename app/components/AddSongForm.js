import React from "react";
import RaisedButton from "material-ui/lib/raised-button";
import TextField from "material-ui/lib/text-field";

// SongForm allows user to enter a song URL 
// The inputtedSong is added to SongQueue via prop method addSong()
// The inputtedSong is submitted when the user presses enter or clicks on the submit button
export default class AddSongForm extends React.Component{

	constructor(props) {
		super(props);
		// Method Bindings
		this.addSong = this.addSong.bind(this);
		this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
		// State
		this.state = {
			inputtedSong : ""
		}
	}

	// prop method from SongQueue component
	// adds the inputted song to SongQueue and clears the TextField 
	// TODO : avoid repititions, React wants objects with unique keys. Here the keys are just the value
	addSong(e) {
        this.props.addSong(this.state.inputtedSong);
		this.setState({ inputtedSong: "" });	
    }

    // State.inpputtedSong will get updated whenever the text field value is changed
    handleTextFieldChange(e) {
    	this.setState({ inputtedSong: e.target.value });
    }

	render() {
		return(
			<div>
				<TextField 
					hintText="Song URL"
					onChange = {this.handleTextFieldChange}
					onEnterKeyDown = {this.addSong}
					value = {this.state.inputtedSong}
				/>
				<br/>
			{/* How to get the value from textfield and add it as a param to addSong() ?*/}
				<RaisedButton
					onClick = {this.addSong}
					label="Add to Queue"
					secondary={true}
				/>
			</div>
		)
	}
}
AddSongForm.propTypes = {
    addSong: React.PropTypes.func.isRequired
};