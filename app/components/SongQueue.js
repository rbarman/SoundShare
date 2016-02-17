import React from "react";
import List from "material-ui/lib/lists/list";
import ListItem from "material-ui/lib/lists/list-item";
import RaisedButton from "material-ui/lib/raised-button";
import AddSongForm from "./AddSongForm";

// SongQueue queues up all the entered songs
export default class SongQueue extends React.Component{
	constructor() {
		super();
		// Method bindings
		this.addSong= this.addSong.bind(this);
		// State
		this.state = {
			songs : []
		}
	}

	addSong(song) {
		var array = this.state.songs.slice();
		// Only want to add unique songs to queue
		// Will not get the children must have unique keys error
		// TODO : Notifications to show user https://github.com/jesusoterogomez/react-notify-toast
		if(!array.includes(song)) {
			array.push(song);
			this.setState({ songs: array });
		}
	}

	render() {
		return(
			<div>
				<List>
					Queue
					{this.state.songs.map(function(value) {
						return <ListItem key = {value} primaryText = {value}/>
            		})}
				</List>

				<AddSongForm addSong={this.addSong}/>
			</div>
		)
	}
}