import React from "react";
import ReactPlayer from 'react-player'

class Player extends React.Component{
	render() {
		return (
			<div>
				{/* Get urls from Queue as props*/}
				<ReactPlayer
      				url='https://soundcloud.com/brothelmusic/pairplaywithdivine'
      				playing={true}
    			/>				
			</div>
		)
	}
}

export default Player