import BackButton from '../../Components/Buttons/BackButton';
import Navigation from '../../Components/Navigation/Navigation';
import styles from './TransactionDetails.module.css';
import updownbuttondark from '../../Assets/Symbols/updownbutton_dark.png'

const TransactionDetails = () => {
	return (
		<main className={styles.main}>

			{/* ------------- Page Header ------------- */}
			<section className={styles.headerSection}>
				<BackButton />
				<h3 className={styles.headline}>Transaction Details</h3>
				<BackButton /> {/* Insert Logout Button instead */}
			</section>

			{/* Transaction Details */}
			<section className={styles.container}>
				{/* Header */}
				<article className={styles.headerContainer}>
					{/* Profile Picture */}
					<div className={styles.imageContainer}>
						<img src="" alt="" />
					</div>
					<p className={styles.transactionTypeIncome}>Income</p>
					<p className={styles.transactionAmount}>$ 1,285.00</p>
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
						<p className={`${styles.listTransactionTypeIncome} ${styles.listItemInput}`} >Income</p>
					</div>
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>From</p>
						<p className={styles.listItemInput}>Upwork</p>
					</div>
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>Time</p>
						<p className={styles.listItemInput}>10:00 AM</p>
					</div>
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>Date</p>
						<p className={styles.listItemInput}>Feb 30, 2022</p>
					</div>
					<hr />
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>Income</p>
						<p className={styles.listItemInput}>1,285.00</p>
					</div>
					<hr />
					<div className={styles.listItemsContainer}>
						<p className={styles.listItemCategory}>New Total Balance</p>
						<p className={styles.listItemInput}>1,285.00</p>
					</div>

				</article>

			</section>

			<Navigation />
		</main>
	);
};

export default TransactionDetails;
