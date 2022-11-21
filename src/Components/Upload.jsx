import styles from './Upload.module.css'

const Upload = (props) => {
	return (
		<div className={styles.inputContainer}>
			<label className={styles.label} htmlFor="picture">{props.label}</label>
			<input onChange={props.onchange} className={styles.inputfield} type="file" name="" id="" />
		</div>
	)
}

export default Upload
