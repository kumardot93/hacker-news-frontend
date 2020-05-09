import React from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';

function App() {
	return (
		<React.Fragment>
			{/* Header of the page */}
			<Header />

			{/* All the news containts */}
			<Content />
		</React.Fragment>
	);
}

export default App;
