import React, { Component } from 'react';
import styles from './css/Content.module.css';
import News from './News.js';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			NewsIDs: [], //stoers IDs of the news
			searchText: '',
			start: 0,
			end: 30
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

	moreContent = (event) => {
		this.setState({ start: this.state.end, end: this.state.end + 30 });
	};
	lessContent = (event) => {
		this.setState({ start: this.state.start - 30, end: this.state.start });
	};

	render() {
		let end = this.state.end;
		end = this.state.NewsIDs.length > end ? end : this.state.NewsIDs.length;
		let subIds = this.state.NewsIDs.slice(this.state.start, end);
		console.log('sub ids :', subIds);
		//All the news  from from ids to corrosponding news
		let dispNews = this.state.NewsIDs.map((id, index) => {
			return <News id={id} key={index} searchText={this.state.searchText} />;
		});
		dispNews = dispNews.slice(this.state.start, end);

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
				<div id={styles.pageChange}>
					{this.state.start != 0 ? (
						<button
							className={[ 'material-icons', styles.pageBtn, 'btn btn-dark' ].join(' ')}
							onClick={this.lessContent}
						>
							keyboard_arrow_left
						</button>
					) : (
						''
					)}
					{this.state.end < this.state.NewsIDs.length ? (
						<button
							className={[ 'material-icons', styles.pageBtn, 'btn btn-dark' ].join(' ')}
							onClick={this.moreContent}
						>
							keyboard_arrow_right
						</button>
					) : (
						''
					)}
				</div>

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
