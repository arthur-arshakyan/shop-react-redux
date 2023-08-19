import React from 'react'
import ShopContentProduct from '../ShopContentProduct/ShopContentProduct'
import styles from './ShopContent.module.css'

const ShopContent = ({productsData, filteredProducts}) => {

  return (
    <section className={filteredProducts.opacity? `${styles.opacity} ${styles.shopContent}` : styles.shopContent}>
        {
          filteredProducts.notFound 
          ? 
          <p className={styles.noMatches}>No exact matches found</p> 
          :
          filteredProducts?.products.length
          ?  
          filteredProducts?.products.map(product => <ShopContentProduct product={product} key={product?.id}/>)
          :  
          productsData.map(product => <ShopContentProduct product={product} key={product?.id}/>) 
        }
    </section>
  )
}

export default ShopContent