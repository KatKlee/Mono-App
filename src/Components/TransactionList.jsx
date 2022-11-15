import TransactionItem from './TransactionItem';
import styles from './TransactionList.module.css';

const TransactionList = (props) => {
	return (
		<>
			<div className="App">
				<h1>React Props Map und Images</h1>

				{/* Weg 3 dynamisch Content anzeigen lassen */}
				{cars.map((e, i) => (
					<TransactionItem>
						key={i} profile_picture={e.car} transaction_name={e.model} amount={e.year}
					</TransactionItem>
				))}
			</div>
		</>
	);
};

export default TransactionList;
