import { NavLink } from 'react-router-dom';
import styles from './MenuButton.module.css';
const MenuButton = (props) => {
	return (
		<NavLink className={styles.menubutton} to={props.link}>
			<img src={props.img} />
		</NavLink>
	);
};

export default MenuButton;
