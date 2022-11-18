import { Link } from 'react-router-dom';
import styles from './FilterButton.module.css';

const FilterButton = (props) => {
	return <Link classList={styles.filterbutton} to={props.link}></Link>;
};

export default FilterButton;
