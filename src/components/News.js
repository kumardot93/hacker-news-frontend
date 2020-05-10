import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay.js';
import styles from './css/News.module.css';

//redux state management
import { setNewsData } from './../redux/actions/NewsActions.js';
import { connect } from 'react-redux';

class News extends Component {
	constructor(props) {
		super(props);
		this.el = null;
	}

	organizeLayout = () => {
		let hei = this.el.clientHeight;
		if (hei > 550) this.el.style.gridColumn = 'span 4';
		hei = this.el.clientHeight;
		let h = Math.ceil(hei / 40);
		if (h - hei / 40 < 0.025) {
			h = h + 1;
		}
		this.el.style.gridRow = 'span ' + h;
	};

	componentDidMount = () => {
		this.updateNews();
		this.organizeLayout();
	};

	componentDidUpdate = () => {
		this.organizeLayout();
	};

	updateNews = () => {
		if (this.props.news == undefined) {
			fetch('https://hacker-news.firebaseio.com/v0/item/' + this.props.id + '.json')
				.then((response) => response.json())
				.then((data) => {
					this.props.setNewsData(this.props.id, data);
				});
		} else {
			console.log('optomised');
		}
	};

	Overlay = (date) => {
		let el = document.getElementById('overlay');
		el.style.display = 'block';
		let root = document.getElementById('root');
		root.classList.add('blurBG');
		ReactDOM.render(
			<Overlay title={this.props.news.title} text={this.props.news.text} date={date} by={this.props.news.by} />,
			el
		);
	};

	render() {
		if (this.props.searchText != '' && this.props.news != undefined && this.el != null) {
			if (this.props.news.title.indexOf(this.props.searchText) == -1) {
				this.el.style.display = 'none';
			} else {
				this.el.style.display = 'inline-block';
			}
		} else if (this.el != null) {
			this.el.style.display = 'inline-block';
		}
		let disp = 'Initial state';
		let span = 2;
		let heading = '270%';
		let date = '';
		if (this.props.news != undefined) {
			if (this.props.news.score > 200) span = 6;
			else if (this.props.news.score > 50) span = 4;
			// else if (this.state.data.score > 10) span = 3;
			// else if (this.state.data.score > 5) span = 2;
			if (this.props.news.score > 100) heading = 300 + this.props.news.score / 25 + '%';
			else if (this.props.news.score > 50 && this.props.news.score < 80) heading = '230%';
			else if (this.props.news.score > 10) heading = '250%';
			else if (this.props.news.score < 10) heading = '175%';
			date = new Date(this.props.news.time);
			date = date.toDateString();
		}

		disp =
			this.props.news == undefined ? (
				<div className={styles.spinnerCont}>
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
					<div className={[ 'spinner-grow', styles.spinner ].join(' ')} />
				</div>
			) : (
				<React.Fragment>
					<button
						onClick={(ev) => this.Overlay(date)}
						className={[ 'material-icons', styles.overlayBtn ].join(' ')}
					>
						open_in_new
					</button>
					<h1 style={{ fontSize: heading }}>{this.props.news.title}</h1>
					<p dangerouslySetInnerHTML={{ __html: this.props.news.text }} className={styles.newsText} />
					<div className={styles.author}>
						<span className={styles.date}>{date}</span>
						<span className={styles.authorText}>-{this.props.news.by}</span>
					</div>
				</React.Fragment>
			);

		return (
			<div ref={(el) => (this.el = el)} className={styles.newsMain} style={{ gridColumn: 'span ' + span }}>
				{disp}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		news: state.News.newsList[props.id]
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setNewsData: (id, data) => dispatch(setNewsData(id, data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
// export default News;
