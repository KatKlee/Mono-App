import styles from './TransactionItem.module.css';

const TransactionItem = (props) => {
	console.log(props);
	console.log(props.profile_picture);
	console.log(props.transaction_name);
	console.log(props.amount);

	return (
		<div>
			<p>{props.profile_picture}</p>
			<p>{props.transaction_name}</p>
			<p>{props.amount}</p>
		</div>
	);
};
export default TransactionItem;
