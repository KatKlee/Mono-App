import styles from './TransactionItem.module.css';
import IMAGE from '../Assets/Symbols/icon_profile_active.png';
const TransactionItem = (props) => {
	return (
		<div>
			{/* <p>{props.profile_picture}</p>
			<p>{props.transaction_name}</p>
			<p>{props.amount}</p> */}
			<img src={IMAGE} />
			<p>Upwork</p>
			<p>Today</p>
			<p>78,080.00</p>
		</div>
	);
};

export default TransactionItem;
