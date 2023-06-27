import React from 'react'
import styles from './Description.module.css'
import { Link } from 'react-router-dom'

const Description = () => {
  return (
    <div className={styles.description}>
      <h1>Online Shop</h1>
      <p>
        Our shop is a great spot to find trendy and stylish threads, from boho-chic dresses to streetwear-inspired tees and joggers. With their high-quality pieces and reasonable prices, you will be sure to find something that speaks to you.
      </p>
      <button>
        <Link to='/registration'>JOIN US</Link>
      </button>
    </div>
  )
}

export default Description