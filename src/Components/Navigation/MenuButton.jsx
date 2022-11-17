import { Link } from 'react-router-dom';

const MenuButton = (props) => {
	return (
		<Link to={props.link}>
			<img src={props.img} />
		</Link>
	);
};
export default MenuButton;
