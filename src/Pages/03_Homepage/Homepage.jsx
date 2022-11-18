import Display from '../../Components/Display';
import FilterButton from '../../Components/Buttons/FilterButton';
import TransactionList from '../../Components/TransactionList';
import Navigation from '../../Components/Navigation/Navigation';
import styles from './Homepage.module.css';

const Homepage = () => {
	return (
		<section className={styles.main}>
			<Display />
			<div classList={styles.home_wrapper}>
				<h3 classList={styles.home_heading}>Transactions History</h3>
				<FilterButton link={'/home'}>See all</FilterButton>
			</div>
			<TransactionList />
			<Navigation />
		</section>
	);
};

export default Homepage;
