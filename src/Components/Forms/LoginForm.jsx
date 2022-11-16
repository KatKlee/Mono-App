import Button from '../Buttons/Button';
import styles from './LoginForm.module.css';
import MonoManLogin from '../../Assets/Images/MonoMan_Login.png'

const LoginForm = () => {
	return (
		<section className={styles.section}>
			<img className={styles.imageMonoMan} src={MonoManLogin} alt="" />
			<article className={styles.article}>
				<div className={styles.inputContainer}>
					<label className={styles.label} for="email">EMAIL</label>
					<input className={styles.inputfield} type="email" name="" id="" placeholder='E-Mail' />
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} for="password">PASSWORD</label>
					<input className={styles.inputfield} type="password" name="" id="" placeholder='Password' />
				</div>
			</article>
			<Button text={'Login'} />
		</section>
	)
}
export default LoginForm;
