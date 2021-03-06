import ReactDOM from 'react-dom';
import styles from './css/Overlay.module.css';

var CloseOverlay = (event, elid) => {
	//function to close any activity with overlay
	event.preventDefault();
	let root = document.getElementById('root');
	root.classList.remove('blurBG');
	//appliying animation by changing styles id of the element
	document.getElementById(elid).id = styles.unmount;
	setTimeout(unmount, 350); //timeout function, callback called after animation
};

//funtion to unmount any component in overlay div
var unmount = () => {
	ReactDOM.unmountComponentAtNode(document.getElementById('overlay'));
	document.getElementById('overlay').style.display = 'none';
};

export default CloseOverlay;
