import React from 'react';
import CloseOverlay from './CloseOverlay.js';
import styles from './css/Overlay.module.css';
import sty from './css/News.module.css';

function Overlay(props) {
	return (
		<div className="container bg-light" id={styles.overlaymain}>
			<button
				className="material-icons"
				id={styles.cross}
				onClick={(event) => CloseOverlay(event, styles.overlaymain)}
			>
				cancel
			</button>

			<h1 className="display-3">{props.title}</h1>
			<p dangerouslySetInnerHTML={{ __html: props.text }} style={{ fontSize: '130%' }} />
			<div className={sty.author}>
				<span className={sty.date}>{props.date}</span>
				<span className={sty.authorText}>-{props.by}</span>
			</div>
		</div>
	);
}

export default Overlay;
