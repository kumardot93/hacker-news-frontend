import React, { Component } from 'react';
import styles from './css/Content.module.css';
import News from './News.js';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			NewsIDs: [], //stoers IDs of the news
			searchText: ''
		};
	}

	componentDidMount = () => {
		//Fetch operation after Content is mounted
		this.getNewsIds();
	};

	getNewsIds = () => {
		fetch('https://hacker-news.firebaseio.com/v0/askstories.json') //fetching all the IDs of the news
			.then((response) => response.json())
			.then((data) =>
				this.setState((state, props) => {
					return { NewsIDs: data }; //setting state to store news IDs
				})
			);
	};

	searchHandler = (event, reset = 'n') => {
		console.log(event.target.value);
		if (event.key == 'Enter') this.setState({ searchText: event.target.value });
	};

	render() {
		//console.log('NewsIds: ', this.state.NewsIds);
		let dispNews = this.state.NewsIDs.map((id, index) => {
			return <News id={id} key={index} searchText={this.state.searchText} />;
		});
		if (this.state.NewsIDs.length == 0) {
			dispNews = (
				<div className={styles.spinnerCont}>
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
				</div>
			);
		}

		return (
			<div id={styles.contentMain}>
				<input
					onReset={(ev) => this.searchHandler(ev, 'r')}
					onKeyDown={this.searchHandler}
					type="search"
					id={styles.searchBox}
					placeholder="&#xF002;  Search..."
					className="form-control"
				/>

				{dispNews}
			</div>
		);
	}
}

export default Content;
