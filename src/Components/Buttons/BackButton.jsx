import { Link } from 'react-router-dom';
import styles from './BackButton.module.css';
import BackArrow from '../../Assets/Symbols/backbutton.png'

const BackButton = (props) => {
	return (
		<Link className={styles.linkStyle} to={props.link}>
			<img src={BackArrow} />
		</Link>
	);
};

export default BackButton;
