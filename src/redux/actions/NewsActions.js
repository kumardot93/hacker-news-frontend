export function setNewsData(id, data) {
	return {
		type: 'updateNewsList',
		payload: { id: id, data: data }
	};
}
