import React from "react";
import List from "material-ui/lib/lists/list";
import ListItem from "material-ui/lib/lists/list-item";
import RaisedButton from "material-ui/lib/raised-button";

// SongQueue will display all of the songs entered in AddSongForm
// SongQueue is able to get these songs from the store via this.props.songs
export default class SongQueue extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<List>
					{	/*Display each song url as list item 
						NOTE : current implementation has no check for duplicate inputs
							-> React WILL throw a warning on non unique keys
						*/
						this.props.songs.map((song) => {
							return <ListItem key = {song.url}  primaryText =  {song.url}/>
						})
					}
				</List>
			</div>
		)
	}
}