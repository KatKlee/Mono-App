import Image from '../../Assets/Symbols/icon_logout.svg';
import styles from './LogoutButton.module.css';

const LogoutButton = (props) => {
	return (
		<>
			<button onClick={props.onclick} className={styles.logout_button}>
				<img className={styles.logout_img} src={Image} />
			</button>
		</>
	);
};
export default LogoutButton;
