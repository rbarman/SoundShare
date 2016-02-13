var React = require('react');
var ReactDOM = require('react-dom');
var RaisedButton = require('material-ui/lib/raised-button');
var List = require('material-ui/lib/lists/list');
var ListItem = require('material-ui/lib/lists/list-item');
var AppBar =  require('material-ui/lib/app-bar');
var TextField = require('material-ui/lib/text-field');

// creating the Main component
var Main = React.createClass({
	render: function() {
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
});

// render Main component to app in DOM
ReactDOM.render(<Main /> , document.getElementById('app'));