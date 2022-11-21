import styles from './LinkToRegister.module.css'

const LinkToRegister = (props) => {
	return (
		<p className={styles.text}>Don't have an Account yet? <button onClick={() => props.setscreen(2)} className={styles.linkStyle} >Sign Up</button></p>
		/* {action === "login" && <Login/>}
const [action, setAction] = useState("login") */
	)
}
export default LinkToRegister
