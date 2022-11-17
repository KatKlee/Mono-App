import MenuButton from './MenuButton';
import Submenu from './Submenu';
import Icon_Home from '../../Assets/Symbols/icon_home.png';
import Icon_Statistics from '../../Assets/Symbols/icon_statistics.png';
import Icon_Add from '../../Assets/Symbols/icon_add.png';
import Icon_Wallet from '../../Assets/Symbols/icon_wallet.png';
import Icon_Profile from '../../Assets/Symbols/icon_profile.png';

import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<section className={styles.nav}>
			<MenuButton img={Icon_Home} link={'/home'} />
			<MenuButton img={Icon_Statistics} link={'/statistics'} />
			<MenuButton img={Icon_Add} link={'/addtransaction'} />
			<MenuButton img={Icon_Wallet} link={'/wallet'} />
			<MenuButton img={Icon_Profile} link={'/profile'} />
		</section>
	);
};

export default Navigation;
