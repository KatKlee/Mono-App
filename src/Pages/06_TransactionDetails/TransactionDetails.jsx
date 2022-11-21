import BackButton from '../../Components/Buttons/BackButton';
import Navigation from '../../Components/Navigation/Navigation';
import styles from './TransactionDetails.module.css';
import updownbuttondark from '../../Assets/Symbols/updownbutton_dark.png'
import EditButton from '../../Components/Buttons/EditButton';
import LogoutButton from '../../Components/Buttons/LogoutButton';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../../Components/Buttons/DeleteButton';

const TransactionDetails = () => {

	const [transaction, setTransaction] = useState([]) // Array oder Objekt
	const params = useParams()
	const nav = useNavigate()

	useEffect(() => {
		const fetchTransaction = async () => {
			const transactionData = await fetch('http://localhost:7777/transactions/' + params.id, {
				headers: {
					'authentication': 'Bearer ' + localStorage.getItem('token')
				}
			})
			const data = await transactionData.json()
			console.log('data', data)
			setTransaction(data)
		}
		fetchTransaction()
	}, [])

	return (
		<main className={styles.main}>

			{/* ------------- Page Header ------------- */}
			<section className={styles.headerSection}>
				<BackButton />
				<h3 className={styles.headline}>Transaction Details</h3>
				<LogoutButton />
			</section>

			{/* Transaction Details */}
			<section className={styles.container}>
				{/* Header */}
				<article className={styles.headerContainer}>
					{/* Profile Picture */}
					<div className={styles.imageContainer}>
						{/* Woher bekommen wir das Profil Picture? */}
						<img src="" alt="" />
					</div>
					<p className={styles.transactionType_income/* [transaction.type] */}>Income {/* {transaction.type} */}</p>
					<p className={styles.transactionAmount}>$ 1,285.00 {/* {transaction.amount} */}</p>
				</article>

				{/* Details List */}
				<article className={styles.listContainer}>
					{/* List Headline */}
					<div className={styles.listItemsContainer}>
						<h4 className={styles.headlineTransactionDetailsList}>Transaction Details</h4>
						<img src={updownbuttondark} alt="" />
					</div>

					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>Status</p>
						<p className={`${styles.listTransactionType_income/* [transaction.type] */} ${styles.listItemInput}`} >Income {/* {transaction.type} */}</p>
					</div>
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>From</p>
						<p className={styles.listItemInput}>Upwork {/* {transaction.name} */}</p>
					</div>
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>Time</p>
						<p className={styles.listItemInput}>10:00 AM {/* {transaction.date} */}</p>
					</div>
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>Date</p>
						<p className={styles.listItemInput}>Feb 30, 2022 {/* {transaction.date} */}</p>
					</div>
					<hr className={styles.lineOne} />
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>Income {/* {transaction.type} */}</p>
						<p className={styles.listItemInput}>1,285.00 {/* {transaction.amount} */}</p>
					</div>
					<hr className={styles.lineTwo} />
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>New Total Balance</p>
						<p className={styles.listItemInput}>1,285.00 {/* {transaction.total_balance} */}</p>
					</div>
				</article>

				<article className={styles.buttonsContainer}>
					<EditButton nav={nav} />
					<DeleteButton params={params.id} nav={nav} />
				</article>

			</section>


			<Navigation />
		</main>
	);
};

export default TransactionDetails;
