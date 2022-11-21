import styles from './SwitchDiagramButton.module.css';

const SwitchDiagramButton = ({ diagramState, setDiagramState }) => {
	const handleDiagramChange = (event) => {
		console.log(`changing state to ${event.target.innerText}`);
		setDiagramState(event.target.innerText);
	};

	return (
		<div onClick={handleDiagramChange} className={styles.switchButtonContainer}>
			<button className={styles.diagrambutton}>Day</button>
			<button className={styles.diagrambutton}>Week</button>
			<button className={styles.diagrambutton}>Month</button>
			<button className={styles.diagrambutton}>Year</button>
		</div>
	);
};
export default SwitchDiagramButton;
