var React = require('react');
var ReactDOM = require('react-dom');

// creating the Main component
var Main = React.createClass({
	render: function() {
		return (
			<div> 
				Starting Sound Share!
			</div>
		)
	}
});

// render Main component to app in DOM
ReactDOM.render(<Main /> , document.getElementById('app'));