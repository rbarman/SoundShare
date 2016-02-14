import React from "react";
import List from "material-ui/lib/lists/list";
import ListItem from "material-ui/lib/lists/list-item";
import RaisedButton from "material-ui/lib/raised-button";
import AddSongForm from "./AddSongForm";


// SongQueue queues up all the entered songs
export default class SongQueue extends React.Component{
	constructor() {
		super();
		this.addSong= this.addSong.bind(this);
		this.state = {
			songs : []
		}
	}

	addSong(song) {
		var array = this.state.songs.slice();
		array.push(song);
		this.setState({ songs: array });
	}

	render() {

		return(

			<div>
				<List>
				Queue
				{/* Is there a better way to iterate through state.songs? */}
					{this.state.songs.map(function(value) {
						return <ListItem key = {value} primaryText = {value}/>
            		})}
				</List>
				
				<AddSongForm addSong={this.addSong}/>
			</div>
		)
	}
}