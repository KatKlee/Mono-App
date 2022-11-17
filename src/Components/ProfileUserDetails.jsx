import { useEffect, useState } from 'react'
import styles from './ProfileUserDetails.module.css'

const ProfileUserDetails = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('', {
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => setUser(data))
    })




    return (
        <section className={styles.section}>
            {/* <img src={user.img} alt="" />
            <h4>{user.name}</h4>
            <p>{user.email}</p> */}
            <div className={styles.userImgDiv}>
                <img src="" alt="" />
            </div>
            <h4 className={styles.name}>Name Nachname</h4>
            <p className={styles.email}>hello@email.de</p>
        </section>
    )
}

export default ProfileUserDetails