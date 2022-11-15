import styles from './GetStartedButton.module.css'
const GetStartedButton = (props) => {
    return (
        <button className={styles.style}>{props.text}</button>
    )
}

export default GetStartedButton