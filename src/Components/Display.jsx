import LogoutButton from './Buttons/LogoutButton';
import styles from './Display.module.css';

const Display = (props) => {
	let coll = document.getElementsByClassName('collapsible');
	let i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener('click', function () {
			this.classList.toggle('active');
			var content = this.nextElementSibling;
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + 'px';
			}
		});
	}

	return (
		<>
			<div>
				<button className={styles.collapsible}>Total Balance</button>
				<LogoutButton />
				<div className={styles.content}>
					<div>
						<p>Income</p>
						<p>TODO</p>
					</div>
					<div>
						<p>Expenses</p>
						<p>TODO</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Display;
