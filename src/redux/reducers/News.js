const News = (state = { newsList: {} }, action) => {
	state = { ...state };
	switch (action.type) {
		case 'updateNewsList':
			state.newsList = { ...state.newsList };
			state.newsList[action.payload.id] = action.payload.data;
			break;
	}
	return state;
};

export default News;
