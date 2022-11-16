import { Link } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = (props) => {
	return (
		<Link to={props.link}>
			<img src={'../../Assets/Symbols/backbutton.png'} />
		</Link>
	);
};

export default BackButton;
