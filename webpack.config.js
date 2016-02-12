module.exports = {
	// root component -> where to start prossessing jsx
	entry: "./app/components/Main.js",
	// where to put translated js
	output : {
		filename: "./public/script.js"
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
}