import styles from './TransactionItem.module.css';

const TransactionItem = (props) => {
	return (
		<div>
			<p>{props.profile_picture}</p>
			<p>{props.transaction_name}</p>
			<p>{props.amount}</p>
		</div>
	);
};

export default TransactionItem;
