import { useState } from 'react';
import Button from '../Buttons/Button';
import Upload from '../Upload';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {

	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [file, setFile] = useState(null)

	const registerUser = async () => {
		const user = {
			name: fullname,
			email: email,
			password: password
		}

		/* const response = await fetch('', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		}) */

		/* const data = await response.json()
		console.log(data) */
		console.log(fullname)
		console.log(email)
		console.log(password)
	}

	return (
		<section className={styles.section}>
			<article>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="fullname">NAME</label>
					<input onChange={(e) => setFullname(e.target.value)} className={styles.inputfield} type="text" name="fullname" id="fullname" value={fullname} placeholder='Full Name' />
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="email">EMAIL</label>
					<input onChange={(e) => setEmail(e.target.value)} className={styles.inputfield} type="email" name="email" id="email" value={email} placeholder='E-Mail' />
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="password">PASSWORD</label>
					<input onChange={(e) => setPassword(e.target.value)} className={styles.inputfield} type="password" name="password" id="password" value={password} placeholder='Password' />
				</div>
				<Upload onchange={(e) => setFile(e.target.value)} value={file} />
			</article>
			<Button onclick={registerUser} text={'Sign Up'} />
		</section>
	)
}
export default RegisterForm
