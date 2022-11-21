import { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import Upload from '../Upload';
import styles from './AddForm.module.css';

const AddForm = (props) => {

	const [transactionName, setTransactionName] = useState('')
	const [amount, setAmount] = useState(0)
	const [date, setDate] = useState() // was muss hier eingetragen werden?
	const [file, setFile] = useState(null)
	const [receiptBase64, setReceiptBase64] = useState('')

	useEffect(() => {
		if (file) {
			/* console.log(file.size) */
			const reader = new FileReader()
			reader.onload = handleReaderLoaded
			reader.readAsDataURL(file)
		}
	}, [file])

	const handleReaderLoaded = (event) => {
		setReceiptBase64(event.target.result)
	}


	const addTransaction = async () => {
		const transaction = {
			transaction_name: transactionName,
			amount: amount,
			date: date,
			receipt: receiptBase64
		}

		const response = await fetch('http://localhost:7777/transactions/', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(transaction)
		})

		if (response.ok) {
			console.log(transaction.date)
		}
	}


	return (
		<section className={styles.section}>
			<article>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="name">FROM / TO</label>
					<input onChange={(e) => setTransactionName(e.target.value)} className={styles.inputfield} type="text" name="name" id="name" value={transactionName} placeholder='Name' />
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="email">AMOUNT</label>
					<input onChange={(e) => setAmount(e.target.value)} className={styles.inputfield} type="number" name="amount" id="amount" value={amount} placeholder='Example 42,30' />
				</div>

				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="date">DATE</label>
					<input onChange={(e) => setDate(e.target.value)} className={styles.inputfield} type="date" name="date" id="date" value={date} placeholder='Password' />
				</div>
				<Upload onchange={(e) => setFile(e.target.files[0])} label={'RECEIPT (jpg/png max. 10MB)'} />
			</article>
			<Button onclick={addTransaction} text={'Add'} />
		</section>
	)
}
export default AddForm;
