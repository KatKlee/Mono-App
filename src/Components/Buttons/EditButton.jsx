import styles from './EditButton.module.css'

const EditButton = (props) => {

    // reicht nur eine Weiterleitung zur Add-Transaktion? Wie schaffen wir dass die derzeitigen Eingaben schon in den Feldern sind? Fetch muss wahrscheinlich auch angepasst/erweitert werden (Methode für updaten eines Datensatzes)
    const edit = () => {
        { props.nav('/addtransaction') }
    }

    return (
        <button onClick={edit} className={styles.buttonStyle}>Edit</button>
    )
}

export default EditButton