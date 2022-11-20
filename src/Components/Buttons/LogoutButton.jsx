import { useNavigate } from 'react-router-dom';
import Image from '../../Assets/Symbols/icon_logout.svg';
import styles from './LogoutButton.module.css';

const LogoutButton = () => {
	const nav = useNavigate()

	const logout = () => {
		localStorage.clear()
		nav('/onboarding')
	}

	return (
		<button onClick={logout()} className={styles.logout_button}>
			<img className={styles.logout_img} src={Image} />
		</button>
	);
};
export default LogoutButton;
