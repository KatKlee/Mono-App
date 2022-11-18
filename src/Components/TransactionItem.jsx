import styles from './TransactionItem.module.css';
import IMAGE from '../Assets/Symbols/icon_profile_active.png';
const TransactionItem = (props) => {
	return (
		<div className={styles.transactionitem}>
			<div className={styles.transactionitem_wrapper_top}>
				<div className={styles.transactionitem_img_bg}>
					<img className={styles.transactionitem_img} src={IMAGE} />
				</div>
				<div className={styles.transactionitem_wrapper_bottom}>
					<p className={styles.transactionitem_name}>Upwork</p>
					<p className={styles.transactionitem_date}>Today</p>
				</div>
			</div>
			<p className={styles.transactionitem_amount}>78,080.00</p>
		</div>
	);
};

export default TransactionItem;

/* <p>{props.profile_picture}</p>
			<p>{props.transaction_name}</p>
			<p>{props.amount}</p> */
