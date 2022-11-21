import styles from './GetStartedButton.module.css'
const GetStartedButton = (props) => {
    return (
        <button onClick={() => props.setscreen(2)} className={styles.style}>{props.text}</button>
    )
}

export default GetStartedButton