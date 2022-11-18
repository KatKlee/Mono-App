import TransactionItem from './TransactionItem';
import styles from './TransactionList.module.css';

const TransactionList = (props) => {
	return (
		<section className={styles.transactionlist}>
			<TransactionItem />
			<TransactionItem />
			<TransactionItem />
			<TransactionItem />
		</section>
	);
};

export default TransactionList;
