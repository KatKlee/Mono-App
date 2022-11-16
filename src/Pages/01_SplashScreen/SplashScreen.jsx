import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SplashScreen.module.css';

const SplashScreen = () => {
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			navigate('/onboarding')
		}, 2000)
	}, [])

	return (
		<main className={styles.main}>
			<h1 className={styles.headline}>mono</h1>
		</main>
	);
};

export default SplashScreen;
