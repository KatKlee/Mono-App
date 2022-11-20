import { NavLink } from 'react-router-dom';
import styles from './SubmenuButton.module.css';

const SubmenuButton = (props) => {
	return (
		<NavLink className={styles.submenubutton} to={props.link} onClick={props.onClick}>
			<img src={props.img} />
		</NavLink>
	);
};

export default SubmenuButton;
