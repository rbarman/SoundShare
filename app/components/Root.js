import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import AppBar from "material-ui/lib/app-bar";
import SongQueue from "./SongQueue";
import AddSongForm from "./AddSongForm";

// Root Component
class Root extends React.Component{
	render() {
		return (
			<div> 
				<AppBar
					title="SoundShare"
					showMenuIconButton={false}
				/>

				<SongQueue 
					songs = {this.props.songs}
				/>

				{/* AddSongForm requires dispatch because it will dispatch an action to add a song*/}
				<AddSongForm
					dispatch = {this.props.dispatch}
				/>

			</div>
		)
	}
};

function mapStateToProps(state) {
	return state;
}

// exporting the "connected Root"
export default connect(mapStateToProps)(Root)