import React, { Component } from 'react';
import styles from './css/News.module.css';

class News extends Component {
	state = {
		data: null
	};
	componentDidMount = () => {
		this.updateNews();
	};
	updateNews = () => {
		fetch('https://hacker-news.firebaseio.com/v0/item/' + this.props.id + '.json')
			.then((response) => response.json())
			.then((data) => this.setState({ data: data }));
	};

	render() {
		let disp = 'Initial state';
		disp =
			this.state.data == null || this.state.data == undefined ? (
				<div className={styles.spinnerCont}>
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
				</div>
			) : (
				<React.Fragment>
					<h1>{this.state.data.title}</h1>
					<p dangerouslySetInnerHTML={{ __html: this.state.data.text }} />
					<div className={styles.author}>
						<span className={styles.authorText}>-{this.state.data.by}</span>
					</div>
				</React.Fragment>
			);

		return <div className={styles.newsMain}>{disp}</div>;
	}
}

export default News;
