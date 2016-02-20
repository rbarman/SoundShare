// all reducing functions for this.state.songs
export default function songReducer(state = {}, action) {
    
	switch (action.type) {
        case 'ADD_SONG':
        	return Object.assign({},state, {
                // TODO : Numerical ID for unique keys 
                    // -> avoid React non unique key error
                // TODO : Queue Indexing in state.songs -> render 
                    // -> render function can just render in this order 
        		songs: [{
        			// add new song here	
        			url: action.url
        		}, ...state.songs]
        	})
        default:
            return state;
    }
}