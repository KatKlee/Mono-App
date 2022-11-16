import Display from '../../Components/Display';
import Navigation from '../../Components/Navigation/Navigation';

import styles from './Homepage.module.css';

const Homepage = (props) => {
	return (
		<section className={styles.home}>
			<Display></Display>
			<Navigation></Navigation>
		</section>
	);
};

export default Homepage;
