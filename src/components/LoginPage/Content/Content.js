import React from 'react'
import Description from './Description/Description'
import Form from './Form/Form'
import styles from './Content.module.css'

const Content = () => {
  return (
    <section className={styles.content}>
        <Description/>
        <Form/>
    </section>
  )
}

export default Content