import BackButton from '../../Components/Buttons/BackButton';
import LogoutButton from '../../Components/Buttons/LogoutButton';
import AddForm from '../../Components/Forms/AddForm';
import Navigation from '../../Components/Navigation/Navigation';
import styles from './AddTransaction.module.css';

const AddTransaction = () => {
	return (
		<main className={`${styles.main} ${styles.income}`}>

			<section className={styles.headerSection}>
				<BackButton />
				<h3 className={styles.headline}>Add Income</h3>
				<LogoutButton />
			</section>

			<AddForm />


			<Navigation />
		</main>
	);
};

export default AddTransaction;
