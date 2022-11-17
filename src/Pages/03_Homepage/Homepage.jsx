import Display from '../../Components/Display';
import TransactionList from '../../Components/TransactionList';
import Navigation from '../../Components/Navigation/Navigation';

import styles from './Homepage.module.css';

const Homepage = () => {
	return (
		<section className={styles.main}>
			<Display />
			<h2>Transactions History</h2>
			<TransactionList />
			<Navigation />
		</section>
	);
};

export default Homepage;
