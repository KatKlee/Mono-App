import styles from './LinkToLogin.module.css'

const LinkToLogin = (props) => {
	return (
		<p className={styles.text}>Already Have An Account? <button onClick={() => props.setscreen(1)} className={styles.linkStyle} >Log In</button></p>
		/* {action === "login" && <Login/>}
		const [action, setAction] = useState("login") */
	)
}
export default LinkToLogin;
