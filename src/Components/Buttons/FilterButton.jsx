import styles from './FilterButton.module.css';

const FilterButton = (props) => {
	return <button classList={styles.filterbutton}>{props.text}</button>;
};

export default FilterButton;
