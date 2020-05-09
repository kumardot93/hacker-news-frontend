import React from 'react';
import styles from './css/Header.module.css';

function Header() {
	return (
		<h1 id={styles.headText} className="display-4">
			Hacker News
		</h1>
	);
}

export default Header;
