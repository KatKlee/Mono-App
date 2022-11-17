import BackButton from '../../Components/Buttons/BackButton';
import LogoutButton from '../../Components/Buttons/LogoutButton';
import Navigation from '../../Components/Navigation/Navigation';
import styles from './Wallet.module.css';
import iconAdd from '../../Assets/Symbols/wallet/icon_wallet_add.svg'
import iconPay from '../../Assets/Symbols/wallet/icon_wallet_pay.svg'
import iconSend from '../../Assets/Symbols/wallet/icon_wallet_send.svg'

const Wallet = () => {
	return (
		<main className={styles.main}>

			{/* ------------- Page Header ------------- */}
			<section className={styles.headerSection}>
				<BackButton />
				<h3>Wallet</h3>
				<BackButton /> {/* Insert Logout Button instead */}
			</section>

			{/* ------------- Wallet Details ------------- */}
			<section className={styles.walletDetailsSection}>
				<h4 className={styles.totalBalance}>Total Balance</h4>
				<p className={styles.totalBalanceAmount}>$ 2,2348.00</p>

				{/* Buttons Add/Pay/Send */}
				<article className={styles.buttonContainer}>
					{/* Add */}
					<div>
						<button className={styles.buttonStyle}>
							<img className={styles.iconStyle} src={iconAdd} alt="Icon for Add" />
						</button>
						<p className={styles.iconText}>Add</p>
					</div>
					{/* Pay */}
					<div>
						<button className={styles.buttonStyle}>
							<img className={styles.iconStyle} src={iconPay} alt="Icon for Pay" />
						</button>
						<p className={styles.iconText}>Pay</p>
					</div>
					{/* Send */}
					<div>
						<button className={styles.buttonStyle}>
							<img className={styles.iconStyle} src={iconSend} alt="Icon for Pay" />
						</button>
						<p className={styles.iconText}>Send</p>
					</div>
				</article>

			</section>

			{/* Insert Transaction History here */}

			<Navigation />
		</main>
	);
};

export default Wallet;
