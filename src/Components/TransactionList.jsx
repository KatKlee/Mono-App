import { useEffect, useState } from 'react';
import TransactionItem from './TransactionItem';
import { v4 as uuidV4 } from "uuid";
import styles from './TransactionList.module.css';

const TransactionList = () => {

	const [transactions, setTransactions] = useState([]) // ist es ein Array oder Objekt?

	useEffect(() => {
		// declaring async data fetching function
		const fetchTransactions = async () => {
			// get the data from the database, checking token beforehand
			const transactionData = await fetch('http://localhost:7777/transactions/', {
				headers: {
					'authentication': 'Bearer ' + localStorage.getItem('token')
				}
			})
			const data = await transactionData.json()
			console.log('data', data)
			setTransactions(data)
		}
		fetchTransactions()
	}, [])

	return (
		<section className={styles.transactionlist}>
			{transactions && transactions.map((transaction) => {
				return (
					<TransactionItem
						key={uuidV4()}
						transaction={transaction}
					/>
				)
			})}
			<TransactionItem />
			<TransactionItem />
			<TransactionItem />
		</section>
	);
};

export default TransactionList;
