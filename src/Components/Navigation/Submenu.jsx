import { Link } from 'react-router-dom';
import Icon_addIncome from '../../Assets/Symbols/add_income.png';
import Icon_addExpense from '../../Assets/Symbols/add_expense.png';
import MenuButton from '../Navigation/MenuButton';
import styles from './Submenu.module.css';

const Submenu = (props) => {
	return (
		<section className={styles.submenu}>
			<MenuButton img={Icon_addIncome} link={'/addtransaction'} />
			<MenuButton img={Icon_addExpense} link={'/addtransaction'} />
		</section>
	);
};

export default Submenu;
