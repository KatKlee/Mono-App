import styles from './LinkToRegister.module.css'

const LinkToRegister = () => {
	return (
		<p className={styles.text}>Don't have an Account yet? <a className={styles.linkStyle} href="">Sign Up</a></p>
		/* {action === "login" && <Login/>}
const [action, setAction] = useState("login") */
	)
}
export default LinkToRegister
