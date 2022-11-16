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
		<>
			<section>
				<div>
					<button className={styles.collapsible}>Total Balance</button>
					<LogoutButton></LogoutButton>
				</div>
				<div className={styles.content}>
					<div>
						<p className={styles.income}>Income</p>
						<p className={styles.number}>TODO</p>
					</div>
					<div>
						<p className={styles.expenses}>Expenses</p>
						<p className={styles.number}>TODO</p>
					</div>
				</div>
			</section>
			<section className={styles.display}></section>
		</>
	);
};

export default Display;
