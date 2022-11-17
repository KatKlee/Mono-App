import LogoutButton from './Buttons/LogoutButton';
import styles from './Display.module.css';

const Display = (props) => {
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
			<div className={styles.display_wrapper}>
				<div>
					<button className={styles.display_text_total}>Total Balance</button>
					<p className={styles.display_number_total}>2,548.00</p>
				</div>
				<LogoutButton />
			</div>

			<div className={styles.display_wrapper}>
				<p className={styles.display_text_income}>Income</p>
				<p className={styles.display_text_expenses}>Expenses</p>
				<p className={styles.display_number_income}>TODO</p>
				<p className={styles.display_number_expenses}>TODO</p>
			</div>
		</section>
	);
};

export default Display;
