import MenuButton from './MenuButton';
import Submenu from './Submenu';
import Icon_Home from '../../Assets/Symbols/icon_home.svg';
import Icon_Statistics from '../../Assets/Symbols/icon_statistics.svg';
import Icon_Wallet from '../../Assets/Symbols/icon_wallet.svg';
import Icon_Profile from '../../Assets/Symbols/icon_profile.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<section className={styles.nav}>
			<MenuButton img={Icon_Home} link={'/home'} />
			<MenuButton img={Icon_Statistics} link={'/statistics'} />
			<Submenu />
			<MenuButton img={Icon_Wallet} link={'/wallet'} />
			<MenuButton img={Icon_Profile} link={'/profile'} />
		</section>
	);
};

export default Navigation;
