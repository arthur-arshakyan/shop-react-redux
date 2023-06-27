import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={styles.contacts}>
        <h1>Contacts</h1>
        <h2>Below is the list of contacts available in our system:</h2>

        <div>
            <p>
                 1. John Doe<br/>
                Email: johndoe@example.com<br/>
                Phone: +1 (123) 456-7890<br/>
            </p>
            <p>
                2. Jane Smith<br/>
                Email: janesmith@example.com<br/>
                Phone: +1 (987) 654-3210<br/>
            </p>
            <p>
                3. Robert Johnson<br/>
                Email: robertjohnson@example.com<br/>
                Phone: +1 (555) 123-4567<br/>
            </p>
        </div>
        <p className={styles.text}>You can perform various actions on the contacts such as adding new contacts, editing existing ones, or deleting unnecessary entries. Use the search feature to quickly find specific contacts based on name, email, or phone number.</p>
        <p className={styles.text}>Please ensure that the contact information is accurate and up to date. Any changes made here will reflect across the entire system, ensuring smooth communication with our users and customers.</p>
    </div>
  )
}

export default Contacts