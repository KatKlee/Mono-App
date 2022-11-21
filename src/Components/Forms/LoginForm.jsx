import Button from '../Buttons/Button';
import styles from './LoginForm.module.css';
import MonoManLogin from '../../Assets/Images/MonoMan_Login.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const nav = useNavigate();

	const loginUser = async () => {
		const result = await fetch('http://localhost:7777/auth/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		if (result.status === 200) {
			const data = await result.json();
			localStorage.setItem('token', data.token);
			nav('/home');
		}
	};

	return (
		<section className={styles.section}>
			<img className={styles.imageMonoMan} src={MonoManLogin} alt="" />
			<article className={styles.article}>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="email">
						EMAIL
					</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						className={styles.inputfield}
						type="email"
						name=""
						id="email"
						placeholder="E-Mail"
					/>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label} htmlFor="password">
						PASSWORD
					</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						className={styles.inputfield}
						type="password"
						name=""
						id="password"
						placeholder="Password"
					/>
				</div>
			</article>
			<Button className={styles.loginuser} onclick={loginUser} text={'Login'} />
		</section>
	);
};
export default LoginForm;
