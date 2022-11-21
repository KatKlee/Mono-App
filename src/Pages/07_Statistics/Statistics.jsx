import Navigation from '../../Components/Navigation/Navigation';
import Diagram from '../../Components/Diagram';
import SwitchDiagramButton from '../../Components/Buttons/SwitchDiagramButton';
import TransactionList from '../../Components/TransactionList';

import styles from './Statistics.module.css';

const Statistics = () => {
	return (
		<main className={styles.main}>
			<section className={styles.statistics_container}>
				<h2>Statistics</h2>
				<div className={styles.statistics_wrapper}>
					<Diagram />
				</div>
				<h3 className={styles.statistics_heading}>Top Spending</h3>
				<TransactionList />
			</section>
			<Navigation />
		</main>
	);
};

export default Statistics;
