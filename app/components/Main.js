import React from "react";
import ReactDOM from "react-dom";
import RaisedButton from "material-ui/lib/raised-button";
import List from "material-ui/lib/lists/list";
import ListItem from "material-ui/lib/lists/list-item";
import AppBar from "material-ui/lib/app-bar";
import TextField from "material-ui/lib/text-field";

// creating the Main component
class Main extends React.Component{
	render() {
		return (

			<div> 

				<AppBar
					title="SoundShare"
					showMenuIconButton={false}
				/>
				<List>
					Queue
				      <ListItem primaryText="Song 1"/>
				      <ListItem primaryText="Song 2"/>
				      <ListItem primaryText="Song 3"/>
				</List>
				<TextField 
					hintText="Song URL"
				/>
				<br/>
				<RaisedButton
					label="Add to Queue"
					secondary={true}
				/>

			</div>
		)
	}
};

// render Main component to app in DOM
ReactDOM.render(<Main /> , document.getElementById('app'));