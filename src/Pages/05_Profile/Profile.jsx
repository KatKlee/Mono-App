import Navigation from '../../Components/Navigation/Navigation';
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<main className={styles.main}>
			<p>Unser Profil</p>
			<Navigation></Navigation>
		</main>
	);
};

export default Profile;
