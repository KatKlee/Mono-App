import MenuButton from './MenuButton';
import Submenu from './Submenu';
import Icon_Home from '../../Assets/Symbols/icon_home.png';
import Icon_Statistics from '../../Assets/Symbols/icon_statistics.png';
import Icon_Add from '../../Assets/Symbols/icon_add.png';
import Icon_Wallet from '../../Assets/Symbols/icon_wallet.png';
import Icon_Profile from '../../Assets/Symbols/icon_profile.png';

import styles from './Navigation.module.css';

const Navigation = (props) => {
	return (
		<div>
			<MenuButton>
				<img src={Icon_Home} />
			</MenuButton>
			<MenuButton>
				<img src={Icon_Statistics} />
			</MenuButton>
			<Submenu>
				<img src={Icon_Add} />
			</Submenu>
			<MenuButton>
				<img src={Icon_Wallet} />
			</MenuButton>
			<MenuButton>
				<img src={Icon_Profile} />
			</MenuButton>
		</div>
	);
};

export default Navigation;
