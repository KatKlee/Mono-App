import BackButton from '../../Components/Buttons/BackButton';
import Navigation from '../../Components/Navigation/Navigation';
import ProfileUserDetails from '../../Components/ProfileUserDetails';
import styles from './Profile.module.css';
import accountInfo from '../../Assets/Images/profile/icon_user_account-info.png'
import personalProfile from '../../Assets/Images/profile/icon_user_personal-profile.png'
import messageCenter from '../../Assets/Images/profile/icon_user_message-center.png'
import loginAndSecurity from '../../Assets/Images/profile/icon_user_login-and-security.png'
import dataAndPrivacy from '../../Assets/Images/profile/icon_user_data-and-privacy.png'


const Profile = () => {
	return (
		<main className={styles.main}>
			<section className={styles.headerSection}>
				<BackButton />
				<h3>Profile</h3>
				<BackButton />
			</section>
			<ProfileUserDetails />
			<section className={styles.section}>
				<a href="#" className={styles.linkListItem}>
					<img className={styles.icons} src={accountInfo} alt="" />
					<p className={styles.category}>Account Info</p>
				</a>
				<a href="#" className={styles.linkListItem}>
					<img className={styles.icons} src={personalProfile} alt="" />
					<p className={styles.category}>Personal Profile</p>
				</a>
				<a href="#" className={styles.linkListItem}>
					<img className={styles.icons} src={messageCenter} alt="" />
					<p className={styles.category}>Message Center</p>
				</a>
				<a href="#" className={styles.linkListItem}>
					<img className={styles.icons} src={loginAndSecurity} alt="" />
					<p className={styles.category}>Login and Security</p>
				</a>
				<a href="#" className={styles.linkListItem}>
					<img className={styles.icons} src={dataAndPrivacy} alt="" />
					<p className={styles.category}>Data and Privacy</p>
				</a>
				<a href="#" className={styles.linkListItem}>
					<img className={styles.icons} src={dataAndPrivacy} alt="" />
					<p className={styles.category}>Logout</p>
				</a>
			</section>
			<Navigation />
		</main>
	);
};

export default Profile;
