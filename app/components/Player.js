import React from "react";
import ReactPlayer from 'react-player'

class Player extends React.Component{
	render() {
		return (
			<div>

	    		<ReactPlayer
					url={this.props.songs[0].url}
					playing={true}
				/>	

			</div>
		)
	}
}

export default Player