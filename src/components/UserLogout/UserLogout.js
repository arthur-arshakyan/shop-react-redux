import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './/UserLogout.module.css'

const UserLogout = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.logout}>
        <p onClick={() => navigate('/', {replace: true})}>Logout</p>
    </div>
  )
}

export default UserLogout