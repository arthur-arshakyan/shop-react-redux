import React from 'react'
import styles from './LayoutData.module.css'

const LayoutData = ({icon, content}) => {
  return (
    <div className={styles.menu}>
        <div className={styles.menuItem}>
            <div className={styles.icon}>{icon}</div>
            <p className={styles.content}>{content}</p>
        </div>
    </div>
  )
}

export default LayoutData