import styles from './OnboardingStart.module.css'
import MonoMan from '../Assets/Images/Mono_Man_w_coins.png'
import Button from './Buttons/Button'
import LinkToLogin from './LinkToLogin'

const OnboardingStart = () => {
	return (
		<main className={styles.main}>
			<img className={styles.monoManImage} src={MonoMan} alt="" />
			<h2 className={styles.headline}>Spend Smarter <br />Save More</h2>
			<Button text={'Get Started'} />
			<LinkToLogin />
		</main>
	)
}
export default OnboardingStart
