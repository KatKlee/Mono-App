import styles from './Statistics.module.css';
import DemoLine from "../../Components/Diagram";
import SwitchDiagramButton from "../../Components/Buttons/SwitchDiagramButton";

const Statistics = () => {
	return (
		<div className={styles.statisticContainer}>
			<h1>Statistics</h1>
			<DemoLine/>
		</div>
	);
};

export default Statistics;
