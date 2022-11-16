import styles from './Upload.module.css'

const Upload = (props) => {
	return (
		<div className={styles.inputContainer}>
			<label className={styles.label} for="profilpic">PROFIL PICTURE</label>
			<input className={styles.inputfield} type="file" name="" id="" />
		</div>
	)
}

export default Upload
