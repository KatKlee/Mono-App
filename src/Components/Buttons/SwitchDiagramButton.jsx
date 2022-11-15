import styles from './SwitchDiagramButton.module.css';

const SwitchDiagramButton = ({diagramState, setDiagramState}) => {

	const handleDiagramChange = (event) => {
		console.log(`changing state to ${event.target.innerText}`);
		setDiagramState(event.target.innerText);
	}

	return(
		<div onClick={handleDiagramChange} className={styles.switchButtonContainer}>
			<button>Day</button>
			<button>Week</button>
			<button>Month</button>
			<button>Year</button>
		</div>
	);
};
export default SwitchDiagramButton;
