import styles from './TransactionItem.module.css';
import IMAGE from '../Assets/Symbols/icon_profile_active.png';

const TransactionItem = (props) => {

	/* 
	Hilfe für props variable in css-modules className
	https://stackoverflow.com/questions/69892206/how-to-use-props-variable-for-css-modules-classname
	*/

	return (
		<div className={styles.transactionitem}>
			<div className={styles.transactionitem_wrapper_top}>
				<div className={styles.transactionitem_img_bg}>
					<img className={styles.transactionitem_img} src={IMAGE} /* src={props.transaction.profile_picture} */ alt='' />
				</div>
				<div className={styles.transactionitem_wrapper_bottom}>
					<p className={styles.transactionitem_name}>Upwork {/* {props.transaction.transaction_name} */}</p>
					<p className={styles.transactionitem_date}>Today {/* {props.transaction.date} */}</p>
				</div>
			</div>
			<p className={`${styles.transactionitem_amount} ${styles.transactionitem_amount_income/* [props.transaction.type] */}`}>{/* hier ternary operator for '-' or '+' */} 78,080.00 {/* {props.transaction.amount} */}</p>
		</div >
	);
};

export default TransactionItem;

/* <p>{props.profile_picture}</p>
			<p>{props.transaction_name}</p>
			<p>{props.amount}</p> */
