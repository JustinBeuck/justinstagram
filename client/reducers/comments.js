function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
		return [...state,{
			user: action.author,
			text: action.comment
		}];
		case 'REMOVE_COMMENT':
		// return new state without deleted comment
		return [
		//from the start to the one we want to delete
			...state.slice(0, action.i),
			...state.slice(action.i + 1)
		]
		default: 
			return state;

	}
	return state;
}


function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		// take the current state
		return {
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
  return state;
}

export default comments;