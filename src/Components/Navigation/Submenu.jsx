import { Link } from 'react-router-dom';
import styles from './Submenu.module.css';

const Submenu = (props) => {
	return (
		<Link to={props.link}>
			<img src={props.img} />
		</Link>
	);
};
export default Submenu;
