import React from 'react'
import styles from './ShopProductViewMore.module.css'
import { useDispatch } from 'react-redux'
import { fetchPatchProduct } from '../../store/slices/products/productsAPI'

const ShopProductViewMore = ({product, setViewModal, currentUser}) => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => setViewModal(false)} className={styles.modalBg}>
        <div onClick={(event) => event.stopPropagation()} className={styles.modalContent}>
            <h1 className={styles.title}>{product?.title}</h1>
            <div className={styles.content}>
              <div className={styles.left}>
                <img src={product?.img} alt={product?.title}/>
                <p>$ {product?.price}</p>
              </div>
              <div className={styles.right}>
                <p>{product?.description}</p>
                <button onClick={() => dispatch(fetchPatchProduct({product, id: currentUser.id}))}>Add to Cart</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ShopProductViewMore