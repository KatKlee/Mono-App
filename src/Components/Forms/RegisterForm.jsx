import Button from '../Buttons/Button';
import Upload from '../Upload';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
	return (
		<section className={styles.section}>
			<article>
				<div className={styles.inputContainer}>
					<label className={styles.label} for="fullname">NAME</label>
					<input className={styles.inputfield} type="text" name="fullname" id="fullname" placeholder='Full Name' />
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} for="email">EMAIL</label>
					<input className={styles.inputfield} type="email" name="email" id="email" placeholder='E-Mail' />
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} for="password">PASSWORD</label>
					<input className={styles.inputfield} type="password" name="password" id="password" placeholder='Password' />
				</div>
				<Upload />
			</article>
			<Button text={'Sign Up'} />
		</section>
	)
}
export default RegisterForm
