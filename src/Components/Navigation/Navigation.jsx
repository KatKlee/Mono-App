import MenuButton from './MenuButton';
import Submenu from './Submenu';

import styles from './Navigation.module.css';

const Navigation = (props) => {
	return (
		<div>
			<MenuButton>HOME</MenuButton>
			<MenuButton>STATISTICS</MenuButton>
			<Submenu>ADD</Submenu>
			<MenuButton>WALLET</MenuButton>
			<MenuButton>PROFILE</MenuButton>
		</div>
	);
};
export default Navigation;
