import styles from './OnboardingStart.module.css'
import MonoMan from '../Assets/Images/Mono_Man_w_coins.png'
import LinkToLogin from './LinkToLogin'
import GetStartedButton from './Buttons/GetStartedButton'

const OnboardingStart = (props) => {
	return (
		<main className={styles.main}>
			<img className={styles.monoManImage} src={MonoMan} alt="" />
			<h2 className={styles.headline}>Spend Smarter <br />Save More</h2>
			<GetStartedButton text={'Get Started'} setscreen={props.setscreen} />
			<LinkToLogin setscreen={props.setscreen} />
		</main>
	)
}
export default OnboardingStart
