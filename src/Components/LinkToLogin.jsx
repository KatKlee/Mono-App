import styles from './LinkToLogin.module.css'

const LinkToLogin = () => {
	return (
		<p className={styles.text}>Already Have An Account? <a className={styles.linkStyle} href="">Log In</a></p>
		/* {action === "login" && <Login/>}
		const [action, setAction] = useState("login") */
	)
}
export default LinkToLogin;
