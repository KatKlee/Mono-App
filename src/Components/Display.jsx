import LogoutButton from './Buttons/LogoutButton';
import FilterButton from './Buttons/FilterButton';
import TransactionList from '../Components/TransactionList';
import Income_Icon from '../Assets/Symbols/icon_income.png';
import Expenses_Icon from '../Assets/Symbols/icon_expenses.png';
import styles from './Display.module.css';
import { useEffect, useState } from 'react';

const Display = () => {
	const [toggle, setToggle] = useState(false);
	const [finances, setFinances] = useState([]); // Array or Objekt?

	useEffect(() => {
		const fetchFinances = async () => {
			const financesData = await fetch('http://localhost:7777/finanses/', {
				headers: {
					authentication: 'Bearer ' + localStorage.getItem('token'),
				},
			});
			const data = await financesData.json();
			console.log('data', data);
			setFinances(data);
		};
		fetchFinances();
	}, []);

	return (
		<>
			<section className={styles.display}>
				<div className={styles.display_wrapper_top}>
					<button onClick={() => setToggle(!toggle)} className={styles.display_text_total}>
						Total Balance
					</button>
					<LogoutButton />
				</div>

				{toggle && (
					<>
						<p className={styles.display_number_total}>2,548.00 {/* {finances.total_balance} */}</p>
						<div className={styles.display_wrapper_bottom}>
							<div>
								<p className={styles.display_text_income}>
									<img className={styles.display_icon_income} src={Income_Icon} alt="" />
									Income
								</p>
								<p className={styles.display_number_income}>TODO {/* {finances.total_income} */}</p>
							</div>
							<div>
								<p className={styles.display_text_expenses}>
									<img className={styles.display_icon_expenses} src={Expenses_Icon} alt="" />
									Expenses
								</p>
								<p className={styles.display_number_expenses}>TODO {/* {finances.total_expense} */}</p>
							</div>
						</div>
					</>
				)}
			</section>
			<div className={styles.display_wrapper}>
				<h3 className={styles.display_heading}>Transactions History</h3>
				<FilterButton text={'See all'} />
			</div>
			<TransactionList />
		</>
	);
};

export default Display;
