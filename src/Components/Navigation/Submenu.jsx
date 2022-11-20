import React, { useState } from 'react';
import Icon_Add from '../../Assets/Symbols/icon_add.png';
import Icon_addIncome from '../../Assets/Symbols/add_income.png';
import Icon_addExpense from '../../Assets/Symbols/add_expense.png';
import SubmenuButton from '../Navigation/SubmenuButton';
import MenuButton from '../Navigation/MenuButton';
import styles from './Submenu.module.css';

const Submenu = (props) => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<section className={styles.submenu}>
				<SubmenuButton img={Icon_Add} onClick={() => setToggle(!toggle)} /* className={styles.submenu} */ />
				{toggle && (
					<div className={styles.submenu_wrapper}>
						<MenuButton className={styles.submenu_img} img={Icon_addIncome} link={'/addtransaction'} />
						<MenuButton className={styles.submenu_img} img={Icon_addExpense} link={'/addtransaction'} />
					</div>
				)}
			</section>
		</>
	);
};

export default Submenu;
