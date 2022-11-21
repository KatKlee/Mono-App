import styles from './Login.module.css'
import LoginForm from './Forms/LoginForm'
import LinkToRegister from './LinkToRegister'

const Login = (props) => {
    return (
        <main className={styles.main}>
            <h2 className={styles.headline}>Login</h2>
            <LoginForm />
            <LinkToRegister setscreen={props.setscreen} />
        </main>
    )
}

export default Login