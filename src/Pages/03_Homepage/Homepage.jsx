import Display from '../../Components/Display';
import Navigation from '../../Components/Navigation/Navigation';
import styles from './Homepage.module.css';

const Homepage = () => {
	return (
		<section className={styles.main}>
			<Display />
			<Navigation />
		</section>
	);
};

export default Homepage;
