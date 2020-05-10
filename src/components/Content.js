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

	searchHandler = (event) => {
		if (event.key == 'Enter') this.setState({ searchText: event.target.value });
	};

	render() {
		// let end = this.state.end;
		// end = this.state.NewsIDs.length > end ? end : this.state.NewsIDs.length;
		// let subIds = this.state.NewsIDs.slice(0, end);

		//All the news  from from ids to corrosponding news
		let dispNews = this.state.NewsIDs.map((id, index) => {
			return <News id={id} key={index} searchText={this.state.searchText} />;
		});

		//Spinner if NewsIds are not available
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
