let actions = {
	addSong: function(songUrl) {
		return {
			type: "ADD_SONG",
			url: songUrl
		}
	}
}

export default actions