import { Link } from 'react-router-dom';
import styles from './MenuButton.module.css';

const MenuButton = (props) => {
	return (
		<Link to={props.link}>
			<img src={props.img} />
		</Link>
	);
};
export default MenuButton;
