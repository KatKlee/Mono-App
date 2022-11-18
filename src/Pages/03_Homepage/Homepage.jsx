import Display from '../../Components/Display';
import FilterButton from '../../Components/Buttons/FilterButton';
import TransactionList from '../../Components/TransactionList';
import Navigation from '../../Components/Navigation/Navigation';
import styles from './Homepage.module.css';

const Homepage = () => {
	return (
		<section className={styles.main}>
			<Display />
			<div className={styles.home_wrapper}>
				<h3 className={styles.home_heading}>Transactions History</h3>
				<FilterButton text={'See all'} />
			</div>
			<TransactionList />
			<Navigation />
		</section>
	);
};

export default Homepage;
