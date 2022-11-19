import LogoutButton from './Buttons/LogoutButton';
import Income_Icon from '../Assets/Symbols/icon_income.png';
import Expenses_Icon from '../Assets/Symbols/icon_expenses.png';
import styles from './Display.module.css';
import { useEffect, useState } from 'react';

const Display = () => {

	const [finances, setFinances] = useState([]) // Array or Objekt?

	useEffect(() => {
		const fetchFinances = async () => {
			const financesData = await fetch('http://localhost:7777/finanses/', {
				headers: {
					'authentication': 'Bearer ' + localStorage.getItem('token')
				}
			})
			const data = await financesData.json()
			console.log('data', data)
			setFinances(data)
		}
		fetchFinances()
	}, [])


	// let coll = document.getElementsByClassName('collapsible');
	// let i;
	// for (i = 0; i < coll.length; i++) {
	// 	coll[i].addEventListener('click', function () {
	// 		this.classList.toggle('active');

	// 		let content = this.nextElementSibling;

	// 		if (content.style.maxHeight) {
	// 			content.style.maxHeight = Null;
	// 		} else {
	// 			content.style.maxHeight = content.scrollHeight + 'px';
	// 		}
	// 	});
	// }

	return (
		<section className={styles.display}>
			<div className={styles.display_wrapper_top}>
				<div>
					<button className={styles.display_text_total}>Total Balance</button>
					<p className={styles.display_number_total}>2,548.00 {/* {finances.total_balance} */}</p>
				</div>
				<LogoutButton />
			</div>
			<div className={styles.display_wrapper_bottom}>
				<div>
					<p className={styles.display_text_income}>
						<img className={styles.display_icon_income} src={Income_Icon} alt='' />
						Income
					</p>
					<p className={styles.display_number_income}>TODO {/* {finances.total_income} */}</p>
				</div>
				<div>
					<p className={styles.display_text_expenses}>
						<img className={styles.display_icon_expenses} src={Expenses_Icon} alt='' />
						Expenses
					</p>
					<p className={styles.display_number_expenses}>TODO {/* {finances.total_expense} */}</p>
				</div>
			</div>
		</section>
	);
};

export default Display;
