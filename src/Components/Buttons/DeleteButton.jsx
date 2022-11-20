import styles from './DeleteButton.module.css'

const DeleteButton = (props) => {

    const remove = async () => {

        console.log(props.params)

        const getTransaction = await fetch('http://localhost:7777/transactions/', {
            method: 'DELETE',
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: [props.params] })
            // ist die eckige Klammer hier in dem Fall richtig? Normalerweise haben wir ja geschweifte Klammern.
        })
        const data = await getTransaction.json()
        if (data.state) { props.nav('/home') }
        // wie verhält sich das mit einem Token-Check für die weiterleitung zur home-Seite?
    }

    return (
        <button className={styles.buttonStyle} onClick={remove}>Delete</button>
    )
}

export default DeleteButton