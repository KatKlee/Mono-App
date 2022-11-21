import { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import Upload from '../Upload';
import styles from './RegisterForm.module.css';

const RegisterForm = (props) => {
	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [file, setFile] = useState(null)
	const [imgBase64, setImgBase64] = useState('')

	useEffect(() => {
		if (file) {
			/* console.log(file.size) */
			const reader = new FileReader()
			reader.onload = handleReaderLoaded
			reader.readAsDataURL(file)
		}
	}, [file])

	const handleReaderLoaded = (event) => {
		setImgBase64(event.target.result)
	}


	const registerUser = async () => {
		const user = {
			name: fullname,
			email: email,
			password: password,
			img: imgBase64
		}

		const response = await fetch('http://localhost:7777/users/register', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		if (response.ok) {
			props.setscreen(1)
		}
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
				<Upload onchange={(e) => setFile(e.target.files[0])} />
			</article>
			<Button onclick={registerUser} text={'Sign Up'} />
		</section>
	)
}
export default RegisterForm
