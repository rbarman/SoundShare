import React from "react";
import ReactDOM from "react-dom";
import AppBar from "material-ui/lib/app-bar";
import SongQueue from "./SongQueue";

// creating the Main component
class Main extends React.Component{
	render() {
		return (

			<div> 

				<AppBar
					title="SoundShare"
					showMenuIconButton={false}
				/>
				
				<SongQueue/>


			</div>
		)
	}
};

// render Main component to app in DOM
ReactDOM.render(<Main /> , document.getElementById('app'));