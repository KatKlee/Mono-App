import styles from './Login.module.css'
import LoginForm from './Forms/LoginForm'
import LinkToRegister from './LinkToRegister'

const Login = () => {
    return (
        <main className={styles.main}>
            <h2 className={styles.headline}>Login</h2>
            <LoginForm />
            <LinkToRegister />
        </main>
    )
}

export default Login