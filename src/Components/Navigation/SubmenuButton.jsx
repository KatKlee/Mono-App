import { Link } from 'react-router-dom';
import styles from './SubmenuButton.module.css';

const SubmenuButton = (props) => {
	return;
	<Link to={props.link}>
		<img src={props.img} />
	</Link>;
};

export default SubmenuButton;
