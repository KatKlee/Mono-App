import Navigation from '../../Components/Navigation/Navigation';
import DemoLine from '../../Components/Diagram';
import SwitchDiagramButton from '../../Components/Buttons/SwitchDiagramButton';

import styles from './Statistics.module.css';

const Statistics = () => {
	return (
		<main className={styles.main}>
			<section className={styles.statisticContainer}>
				<h2>Statistics</h2>
				<DemoLine />
				<Navigation />
			</section>
		</main>
	);
};

export default Statistics;
