import Navigation from '../../Components/Navigation/Navigation';
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<main className={styles.main}>
			<section>
				<BackButton />
				<h3>Profile</h3>
			</section>
			<Navigation />
		</main>
	);
};

export default Profile;
