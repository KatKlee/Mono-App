import RegisterForm from './Forms/RegisterForm'
import LinkToLogin from './LinkToLogin'
import styles from './SignUp.module.css'

const SignUp = (props) => {
    return (
        <main className={styles.main}>
            <h2 className={styles.headline}>Sign Up</h2>
            <RegisterForm setscreen={props.setscreen} />
            <LinkToLogin setscreen={props.setscreen} />
        </main>
    )
}

export default SignUp